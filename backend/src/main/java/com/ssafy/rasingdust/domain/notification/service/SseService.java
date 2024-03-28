package com.ssafy.rasingdust.domain.notification.service;

import com.ssafy.rasingdust.domain.notification.dto.NotificationDto;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseService {

    public SseEmitter subscribe(String userId, String lastEventId);

    void sendTest(String userId);

    public void send(NotificationDto notificationDto);
}
