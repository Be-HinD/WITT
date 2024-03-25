package com.ssafy.rasingdust.global.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // Global
    INTERNAL_SERVER_ERROR(500, "내부 서버 오류입니다."),
    METHOD_NOT_ALLOWED(405, "허용되지 않은 HTTP method입니다."),
    INPUT_VALUE_INVALID(400, "유효하지 않은 입력입니다."),
    INPUT_TYPE_INVALID(400, "입력 타입이 유효하지 않습니다."),
    HTTP_MESSAGE_NOT_READABLE(400, "request message body가 없거나, 값 타입이 올바르지 않습니다."),
    HTTP_HEADER_INVALID(400, "request header가 유효하지 않습니다."),
    ENTITY_NOT_FOUNT(500, "존재하지 않는 Entity입니다."),
    FORBIDDEN_ERROR(403, "작업을 수행하기 위한 권한이 없습니다."),

    //팔로우 관련
    FOLLOW_ALREADY_EXIST(3000, "이미 팔로잉 되어있는 회원입니다."),
    FOLLOW_NOT_FOUND(3000, "팔로잉 되어있지 않은 회원입니다."),
    //회원 관련
    USER_NOT_FOUND(404, "존재하지 않는 회원입니다."),
    USER_NOT_ENOUGH_BOTTLE(422, "사용 할 수 있는 물병이 없습니다.")

    ;

    private final int status;
    private final String message;
}
