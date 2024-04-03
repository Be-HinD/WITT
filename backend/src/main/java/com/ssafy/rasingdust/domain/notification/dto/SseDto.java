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
public class SseDto {

    private Long notificationId;
    private Boolean readStatus;
    private String type;
    private String event;
    private String message;
    private Long receiverId;
    private Long senderId;
    private String senderName;
    private String senderImg;
    private LocalDateTime time;

    public static SseDto of(NotificationType notificationType, Long receiverId,
        LocalDateTime time) {
        return SseDto.builder()
            .type(notificationType.name())
            .event(notificationType.getEvent())
            .message(notificationType.getMessage())
            .receiverId(receiverId)
            .time(time)
            .build();
    }

    public static SseDto from(Notification notification) {
        Long senderId = null;
        String senderName = null;
        String senderImg = null;
        if (notification.getSender() != null) {
            senderId = notification.getSender().getId();
            senderName = notification.getSender().getUsername();
            senderImg = notification.getSender().getProfileImg();
        }
        return builder()
            .notificationId(notification.getId())
            .readStatus(notification.getReadStatus())
            .type(notification.getNotificationType().name())
            .event(notification.getNotificationType().getEvent())
            .message(notification.getNotificationType().getMessage())
            .receiverId(notification.getReceiverId())
            .senderId(senderId)
            .senderName(senderName)
            .senderImg(senderImg)
            .time(notification.getTime())
            .build();
    }
}
