package com.ssafy.rasingdust.domain.notification.dto;

import com.ssafy.rasingdust.domain.notification.entity.Notification;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NotificationDto {

    private Long notificationId;
    private Boolean readStatus;
    private String type;
    private String event;
    private String message;
    private Long receiverId;
    private Long senderId;
    private LocalDateTime time;

    public static NotificationDto of(Boolean readStatus,
        NotificationType notificationType, Long receiverId, Long senderId, LocalDateTime time) {
        return NotificationDto.builder()
            .readStatus(readStatus)
            .type(notificationType.name())
            .event(notificationType.getEvent())
            .message(notificationType.getMessage())
            .receiverId(receiverId)
            .senderId(senderId)
            .time(time)
            .build();
    }

    public static NotificationDto from(Notification notification) {
        return builder()
            .notificationId(notification.getId())
            .readStatus(notification.getReadStatus())
            .type(notification.getType())
            .event(notification.getEvent())
            .message(notification.getMessage())
            .receiverId(notification.getReceiverId())
            .senderId(notification.getSenderId())
            .time(notification.getTime())
            .build();
    }
}
