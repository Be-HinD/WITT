package com.ssafy.rasingdust.domain.notification.repository;

import com.ssafy.rasingdust.domain.notification.dto.NotificationDto;
import com.ssafy.rasingdust.domain.user.dto.response.SliceResponse;
import org.springframework.data.domain.Pageable;

public interface NotificationRepositoryQuerydsl {

    SliceResponse<NotificationDto> getNoticeSliceByUserId(Long userId, Pageable pageable);
}
