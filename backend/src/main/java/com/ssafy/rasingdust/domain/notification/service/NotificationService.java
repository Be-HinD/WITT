package com.ssafy.rasingdust.domain.notification.service;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface NotificationService {

    public SseEmitter subscribe(String userId, String lastEventId);

    void sendTest(String userId);
}
