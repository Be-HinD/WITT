package com.ssafy.rasingdust.domain.notification.service;

import com.ssafy.rasingdust.domain.notification.dto.NotificationDto;
import com.ssafy.rasingdust.domain.notification.dto.NotificationType;
import com.ssafy.rasingdust.domain.notification.entity.Notification;
import com.ssafy.rasingdust.domain.user.entity.User;
import java.util.List;

public interface NotificationService {

    Notification saveNotice(NotificationType notificationType, Long receiverId,
        Long senderId);

    List<NotificationDto> getNoticeList(User loginUser);

    void readNotice(Long id, User loginUser);
}
