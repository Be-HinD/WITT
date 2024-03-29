package com.ssafy.rasingdust.domain.notification.service;

import com.ssafy.rasingdust.domain.notification.dto.NotificationDto;
import com.ssafy.rasingdust.domain.notification.dto.NotificationType;
import com.ssafy.rasingdust.domain.notification.entity.Notification;
import java.util.List;
import org.springframework.security.core.userdetails.UserDetails;

public interface NotificationService {

    Notification saveNotice(NotificationType notificationType, Long receiverId,
        Long senderId);

    List<NotificationDto> getNoticeList(UserDetails loginUser);

    void readNotice(Long id, UserDetails loginUser);
}
