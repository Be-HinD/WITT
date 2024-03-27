package com.ssafy.rasingdust.domain.notification.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.rasingdust.domain.notification.dto.NotificationDto;
import com.ssafy.rasingdust.domain.notification.dto.NotificationType;
import com.ssafy.rasingdust.domain.notification.repository.SseRepositoryImpl;
import com.ssafy.rasingdust.domain.user.entity.User;
import com.ssafy.rasingdust.domain.user.repository.UserRepository;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Service
@Slf4j
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {

    private static final Long DEFAULT_TIMEOUT = 60L * 1000 * 60;
    //    private final RedisOperations<String, NotificationDto> eventRedisOperations;
//    private final RedisMessageListenerContainer redisMessageListenerContainer;
    final UserRepository userRepository;
    private final SseRepositoryImpl sseRepositoryImpl;
    private final ObjectMapper objectMapper;

    public SseEmitter subscribe(String userId, String lastEventId) {
        String emitterId = makeTimeIncludeId(userId);
        SseEmitter emitter = sseRepositoryImpl.save(emitterId, new SseEmitter(DEFAULT_TIMEOUT));
        User receiver = userRepository.findById(Long.parseLong(userId)).orElseThrow();

        // emitter의 상태를 체크함, 완료되었는지 타임아웃이 났는지
        checkEmitterStatus(emitter, emitterId);

        // 503 에러 방지 더미 이벤트 전송
        NotificationDto notificationDto = NotificationDto.of(false, NotificationType.TEST_MSG,
            Long.valueOf(userId), null, LocalDateTime.now());

        sendSse(emitter, emitterId, emitterId, notificationDto);

        // 클라이언트가 미수신한 Event 전송
//        if (hasLostData(lastEventId)) {
//            sendLostData(lastEventId, email, emitterId, emitter);
//        }

        return emitter;
    }

    @Override
    public void sendTest(String userId) {
        send(NotificationType.TEST_MSG, Long.valueOf(userId), null);
    }

    //특정 유저에게 알림 전송
    public void send(NotificationType notificationType, Long receiverId, Long senderId) {

        NotificationDto notificationDto = NotificationDto.of(false, NotificationType.SSE_CONNECT,
            receiverId, senderId, LocalDateTime.now());

        // 로그인 한 유저의 SseEmitter 모두 가져오기
        Map<String, SseEmitter> sseEmitters = sseRepositoryImpl.findAllEmitterStartWithByUserId(
            String.valueOf(receiverId));

        sseEmitters.forEach(
            (key, emitter) -> {
                // 데이터 캐시 저장(유실된 데이터 처리하기 위함)
                //sseRepositoryImpl.saveEventCache(key, notificationDto);
                // 데이터 전송
                sendSse(emitter, key, key, notificationDto);
            }
        );
    }

    //    @Transactional(propagation = Propagation.REQUIRES_NEW)
//    @TransactionalEventListener
//    //실질적으로 알림을 저장하고 redis 채널에 메시지를 publish하는 역할
//    public void send(NotificationDto NotificationDto) {
//        eventRedisOperations.convertAndSend(getTopicName(NotificationDto.getUserId()),
//            NotificationDto);
//    }
//    private void sendLostData(String lastEventId, String userId, String emitterId,
//        SseEmitter emitter) {
//
//        Map<String, Object> eventCaches = emitterRepository.findAllEventCacheStartWithByUserEmail(
//            String.valueOf(email));
//        eventCaches.entrySet().stream()
//            .filter(entry -> lastEventId.compareTo(entry.getKey()) < 0)
//            .forEach(
//                entry -> sendNotification(emitter, entry.getKey(), emitterId, entry.getValue()));
//    }

    //종료 상태
    private void checkEmitterStatus(SseEmitter emitter, String emitterId) {
        emitter.onCompletion(() -> {
            sseRepositoryImpl.deleteById(emitterId);
            //redisMessageListenerContainer.removeMessageListener(messageListener);
        });
        emitter.onTimeout(() -> {
            sseRepositoryImpl.deleteById(emitterId);
            //redisMessageListenerContainer.removeMessageListener(messageListener);
        });
        emitter.onError((e) -> sseRepositoryImpl.deleteById(emitterId));
    }

    private void sendSse(SseEmitter emitter, String eventId, String emitterId,
        NotificationDto dto) {

        try {
            emitter.send(SseEmitter.event()
                .id(eventId)
                .name(dto.getNotificationType().getEvent())
                .data(dto, MediaType.APPLICATION_JSON));
        } catch (IOException exception) {
            sseRepositoryImpl.deleteById(emitterId);
            emitter.completeWithError(exception);
        }
    }

//    private String getTopicName(final String userId) {
//        return "topics:" + userId;
//    }

    private String makeTimeIncludeId(String userId) {
        return userId + "_" + System.currentTimeMillis();
    }

    private boolean hasLostData(String lastEventId) {
        return !lastEventId.isEmpty();
    }
}