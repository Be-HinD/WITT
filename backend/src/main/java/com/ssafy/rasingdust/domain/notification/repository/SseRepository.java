package com.ssafy.rasingdust.domain.notification.repository;

import java.util.Map;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseRepository {

    SseEmitter save(String emitterId, SseEmitter sseEmitter);

    void saveEventCache(String eventId, Object event);

    Map<String, SseEmitter> findAllEmitter();

    Map<String, SseEmitter> findAllEmitterStartWithByUserId(String userId);

    Map<String, Object> findAllEventCacheStartWithByUserId(String userId);

    void deleteById(String id);

    void deleteAllEmitterStartWithUserId(String userId);

    void deleteAllEventCacheStartWithId(String userId);
}
