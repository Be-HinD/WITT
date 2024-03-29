package com.ssafy.rasingdust.domain.notification.entity;

import com.ssafy.rasingdust.domain.notification.dto.NotificationDto;
import com.ssafy.rasingdust.domain.notification.dto.NotificationType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean readStatus;
    private String type;
    private String event;
    private String message;
    private Long receiverId;
    private Long senderId;
    private LocalDateTime time;

    public void updateReadStatus(Boolean status) {
        this.readStatus = status;
    }

    public static Notification of(NotificationType notificationType, Long receiverId, Long senderId,
        LocalDateTime time) {
        return builder()
            .readStatus(false)
            .type(notificationType.name())
            .event(notificationType.getEvent())
            .message(notificationType.getMessage())
            .receiverId(receiverId)
            .senderId(senderId)
            .time(time)
            .build();
    }

    public static Notification from(NotificationDto dto) {
        return builder()
            .readStatus(dto.getReadStatus())
            .type(dto.getType())
            .event(dto.getEvent())
            .message(dto.getMessage())
            .receiverId(dto.getReceiverId())
            .senderId(dto.getSenderId())
            .time(dto.getTime())
            .build();
    }
}
