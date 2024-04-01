package com.ssafy.rasingdust.global.config.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
public class TokenAuthenticationFilter extends OncePerRequestFilter {

    private final TokenProvider tokenProvider;
    private final static String HEADER_AUTHORIZATION = "Authorization";
    private final static String TOKEN_PREFIX = "Bearer";


    @Override
    protected void doFilterInternal(    // client의 요청헤더의 jwt 토큰의 유효성 검사 및 인가 역할
        HttpServletRequest request,
        HttpServletResponse response,
        FilterChain filterChain) throws ServletException, IOException {
//        System.out.println("come in jwt filter");

        // request에서 토큰 추출 ex) Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
        String authorizationHeader = request.getHeader(
            HEADER_AUTHORIZATION);    // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        String token = getAccessToken(authorizationHeader);

        log.info("요청 Token = " + token);

        // 토큰 유효성 검사
        if (tokenProvider.isValidToken(token)) {
            // 인증서 발급
            Authentication authentication = tokenProvider.getAuthentication(token);
            // spring security에 인증서 등록
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
//        System.out.println("come out jwt filter");
        // 해당 요청을 다음 필터 절차로 넘김
        filterChain.doFilter(request, response);
    }

    private String getAccessToken(String authorizationHeader) {
        // jwt 토큰 해더가 있다면 토큰 반환
        if (authorizationHeader != null && authorizationHeader.startsWith(TOKEN_PREFIX)) {
            return authorizationHeader.substring(TOKEN_PREFIX.length());
        }
        // 없으면 null
        return null;
    }
}
