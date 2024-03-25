package com.ssafy.rasingdust.domain.user.controller;

import com.ssafy.rasingdust.domain.user.dto.response.FeedCharacterResponse;
import com.ssafy.rasingdust.domain.user.service.UserService;
import com.ssafy.rasingdust.global.result.ResultCode;
import com.ssafy.rasingdust.global.result.ResultResponse;
import javax.xml.transform.Result;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Slf4j
public class UserController implements UserControllerDocs{

    private final UserService userService;

    @PostMapping("/follow/{followId}")
    public ResponseEntity<ResultResponse> followUser(@AuthenticationPrincipal UserDetails userDetails ,@PathVariable Long followId) {

        userService.followUser(Long.valueOf(userDetails.getUsername()), followId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.CREATE_FOLLOW_SUCCESS));
    }

    @DeleteMapping("/unfollow/{followId}")
    public ResponseEntity<?> unfollowUser(@AuthenticationPrincipal UserDetails userDetails, @PathVariable Long followId) {
        userService.unFollowUser(Long.valueOf(userDetails.getUsername()), followId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.DELETE__UNFOLLOW_SUCCESS));
    }

    @PostMapping("/character")
    public ResponseEntity<FeedCharacterResponse> feedCharacter(@AuthenticationPrincipal UserDetails userDetails) {
        FeedCharacterResponse feedCharacterResponse = userService.feedCharacter(Long.valueOf(userDetails.getUsername()));
        return ResponseEntity.ok(feedCharacterResponse);
    }
}
