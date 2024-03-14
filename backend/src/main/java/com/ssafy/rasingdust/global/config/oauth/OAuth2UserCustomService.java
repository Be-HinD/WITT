//package com.ssafy.rasingdust.global.config.oauth;
//
//import com.ssafy.rasingdust.domain.user.entity.User;
//import com.ssafy.rasingdust.domain.user.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
//import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
//import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
//import org.springframework.security.oauth2.core.user.OAuth2User;
//import org.springframework.stereotype.Service;
//
//import java.util.Map;
//
//@RequiredArgsConstructor
//@Service
//public class OAuth2UserCustomService extends DefaultOAuth2UserService {  // 로드 유저정보로 회원 가입과 이름 수정 서비스
//    private final UserRepository userRepository;
//
//   @Override
//    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws
//           OAuth2AuthenticationException {
//            // 요청을 바탕으로 유저 정보를 담은 객체를 반환
//            OAuth2User user = super.loadUser(userRequest);
//            saveOrUpdate(user);
//            return user;
//   }
//
//    private User saveOrUpdate(OAuth2User oAuth2User) {
//        Map<String, Object> attributes = oAuth2User.getAttributes();
//        String email = (String) attributes.get("email");
//        String name = (String) attributes.get("name");
//        User user = userRepository.findByEmail(email)
//                .map(entity)
//
//    }
//
//
//}
