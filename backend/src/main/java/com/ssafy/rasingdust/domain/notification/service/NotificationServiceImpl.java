package com.ssafy.rasingdust.domain.notification.service;

import com.ssafy.rasingdust.domain.notification.dto.NotificationDto;
import com.ssafy.rasingdust.domain.notification.dto.NotificationType;
import com.ssafy.rasingdust.domain.notification.entity.Notification;
import com.ssafy.rasingdust.domain.notification.repository.NotificationRepository;
import com.ssafy.rasingdust.domain.user.dto.response.SliceResponse;
import com.ssafy.rasingdust.global.exception.BusinessLogicException;
import com.ssafy.rasingdust.global.exception.ErrorCode;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class NotificationServiceImpl implements NotificationService {

    private final NotificationRepository notificationRepository;
    private final SseService sseService;

    @Override
    @Transactional
    public Notification saveNotice(NotificationType notificationType, Long receiverId,
        Long senderId) {
        Notification notification = Notification.of(notificationType, receiverId, senderId,
            LocalDateTime.now());
        notificationRepository.save(notification);
        sseService.send(NotificationDto.from(notification));
        return notification;
    }

    @Override
    public SliceResponse<NotificationDto> getNoticeList(UserDetails loginUser, Pageable pageable) {

        return notificationRepository.getNoticeSliceByUserId(
            Long.valueOf(loginUser.getUsername()), pageable);
    }

    @Override
    @Transactional
    public void readNotice(Long id, UserDetails loginUser) {
        Notification notification = notificationRepository.findById(id)
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.ENTITY_NOT_FOUNT));
        if (!notification.getReceiverId().equals(Long.valueOf(loginUser.getUsername()))) {
            throw new BusinessLogicException(ErrorCode.FORBIDDEN_ERROR);
        }
        notification.updateReadStatus(true);
    }
}
