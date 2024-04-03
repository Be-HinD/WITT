package com.ssafy.rasingdust.domain.notification.repository;

import static com.ssafy.rasingdust.domain.notification.entity.QNotification.notification;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.rasingdust.domain.notification.dto.NotificationType;
import com.ssafy.rasingdust.domain.notification.dto.SseDto;
import com.ssafy.rasingdust.domain.user.dto.response.SliceResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

@RequiredArgsConstructor
public class NotificationRepositoryQuerydslImpl implements NotificationRepositoryQuerydsl {

    private final JPAQueryFactory queryFactory;

    @Override
    public SliceResponse<SseDto> getNoticeSliceByUserId(Long userId, Pageable pageable) {
        List<SseDto> notices = queryFactory.select(
                Projections.constructor(SseDto.class, notification))
            .from(notification)
            .where(notification.receiverId.eq(userId))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize() + 1)
            .orderBy(notification.time.desc())
            .fetch();
        for (SseDto dto : notices) {
            NotificationType type = NotificationType.valueOf(dto.getType());
            dto.setEvent(type.getEvent());
            dto.setMessage(type.getMessage());
        }
        boolean hasNext = false;
        if (notices.size() > pageable.getPageSize()) {
            notices.remove(pageable.getPageSize());
            hasNext = true;
        }
        Slice<SseDto> slice = new SliceImpl<>(notices, pageable, hasNext);
        return new SliceResponse<>(slice);
    }
}
