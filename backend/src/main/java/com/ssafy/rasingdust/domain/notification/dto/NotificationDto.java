package com.ssafy.rasingdust.domain.notification.dto;

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

    private Boolean readStatus;
    private NotificationType notificationType;
    private Long receiverId;
    private Long senderId;
    private LocalDateTime time;

    public static NotificationDto of(Boolean readStatus,
        NotificationType notificationType, Long receiverId, Long senderId, LocalDateTime time) {
        return NotificationDto.builder()
            .readStatus(readStatus)
            .notificationType(notificationType)
            .receiverId(receiverId)
            .senderId(senderId)
            .time(time)
            .build();
    }
}
