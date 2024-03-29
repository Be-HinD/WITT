package com.ssafy.rasingdust.domain.user.dto.response;

import lombok.Data;

@Data
public class UserListDto {
    private Long followCnt;
    private String duplicateFollower;
    private Long id;
    private String userName;

}
