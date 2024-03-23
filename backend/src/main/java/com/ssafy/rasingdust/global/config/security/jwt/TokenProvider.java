package com.ssafy.rasingdust.global.config.security.jwt;

import com.ssafy.rasingdust.domain.user.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Collections;
import java.util.Date;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class TokenProvider {

    private final JwtProperties jwtProperties;

    public String generateToken(User user, Duration expiredAt) {    // 시간 주입
        Date now = new Date();
        return makeToken(new Date(now.getTime() + expiredAt.toMillis()), user);
    }

    // JWT 토큰 생성 메서드
    private String makeToken(Date expiry, User user) {
        Date now = new Date();

        return Jwts.builder()
                // 헤더
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)  // 헤더 세팅
                // 내용
                .setIssuer(jwtProperties.getIssuer())
                .setIssuedAt(now)
                .setExpiration(expiry)
//                .setSubject(user.getEmail())
                .setSubject(String.valueOf(user.getId()))
                .claim("id", user.getId())
                // 서명
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey().getBytes(StandardCharsets.UTF_8))
                .compact();
    }

    // JWT 토큰 유효성 검사
    public boolean isValidToken(String token) {
        try {
            // 기본적인 JWT 복호화 과정
            Jwts.parser()
                    .setSigningKey(jwtProperties.getSecretKey().getBytes(StandardCharsets.UTF_8)) // 복호화
                    .parseClaimsJws(token);
            return true;
        } catch (Exception e) {    // 복호화 과정에서 에러나면 false
            return false;
        }
    }


    // 트콘 기반 인증 정보 가져오는 메서드, spring security 클래스
    public Authentication getAuthentication(String token) {
        Claims claims = getClaims(token);
        Set<SimpleGrantedAuthority> authorities =
                Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));

        return new UsernamePasswordAuthenticationToken(
                new org.springframework.security.core.userdetails.
                        User(claims.getSubject(), " ", authorities),
                token,
                authorities);
    }

    // 토큰 기반 유저 ID를 가져오는 메서드 Claim은 JWT의 핵심 정보가 있는 Body이다.
    public Long getUserId(String token) {
        return getClaims(token)
                .get("id", Long.class);
    }

    // Claims을 추출하는 메서드
    private Claims getClaims(String token) {
        return Jwts.parser()
                .setSigningKey(jwtProperties.getSecretKey().getBytes(StandardCharsets.UTF_8))
                .parseClaimsJws(token)
                .getBody();
    }

}
