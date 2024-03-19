package com.ssafy.rasingdust.domain.jwt.token.service;

import com.ssafy.rasingdust.domain.jwt.refreshtoken.service.RefreshTokenService;
import com.ssafy.rasingdust.domain.user.entity.User;
import com.ssafy.rasingdust.domain.user.service.UserService;
import com.ssafy.rasingdust.global.config.security.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class TokenService {

    private final UserService userService;
    private final RefreshTokenService refreshTokenService;
    private final TokenProvider tokenProvider;

    // 요청의 리프레시 토큰을 확인하고 2시간짜리 새로운 토큰을 발행하는 메서드
    public String createNewAccessToken(String refreshToken) {
        // 리프레시 토큰의 유효성 검사
        if(!tokenProvider.isValidToken(refreshToken)) {
            throw new IllegalArgumentException("your token is not available");
        }

        // 새로운 엑세스 토큰 생성해 반환
        Long userId = refreshTokenService.findByRefreshToken(refreshToken).getUserId();
        User user = userService.findById(userId);
        return tokenProvider.generateToken(user, Duration.ofHours(2));
    }


}
