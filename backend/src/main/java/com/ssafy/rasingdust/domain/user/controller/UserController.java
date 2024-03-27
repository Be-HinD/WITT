package com.ssafy.rasingdust.domain.user.controller;

import com.ssafy.rasingdust.domain.user.dto.response.UserDto;
import com.ssafy.rasingdust.domain.user.dto.response.FeedCharacterResponse;
import com.ssafy.rasingdust.domain.user.service.UserService;
import com.ssafy.rasingdust.global.result.ResultCode;
import com.ssafy.rasingdust.global.result.ResultResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Slf4j
public class UserController implements UserControllerDocs{

    private final UserService userService;

    @PostMapping("/follow/{fromId}")
    public ResponseEntity<ResultResponse> followUser(@AuthenticationPrincipal UserDetails userDetails ,@PathVariable Long fromId) {

        userService.followUser(Long.valueOf(userDetails.getUsername()), fromId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.CREATE_FOLLOW_SUCCESS));
    }

    @DeleteMapping("/unfollow/{fromId}")
    public ResponseEntity<ResultResponse> unfollowUser(@AuthenticationPrincipal UserDetails userDetails, @PathVariable Long fromId) {
        userService.unFollowUser(Long.valueOf(userDetails.getUsername()), fromId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.DELETE__UNFOLLOW_SUCCESS));
    }

    @GetMapping("/following/list/{userId}")
    public ResponseEntity<ResultResponse> getFollowingList(@AuthenticationPrincipal UserDetails userDetails, @PathVariable Long userId) {

        List<UserDto> result = userService.getFollowingList(Long.valueOf(userDetails.getUsername()), userId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.GET_FOLLOWINGLIST_SUCCESS, result));
    }

    @GetMapping("/follower/list/{userId}")
    public ResponseEntity<ResultResponse> getFollowerList(@AuthenticationPrincipal UserDetails userDetails, @PathVariable Long userId) {

        List<UserDto> result = userService.getFollowerList(Long.valueOf(userDetails.getUsername()), userId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.GET_FOLLOWERLIST_SUCCESS, result));
    }

    @PostMapping("/character")
    public ResponseEntity<FeedCharacterResponse> feedCharacter(@AuthenticationPrincipal UserDetails userDetails) {
        FeedCharacterResponse feedCharacterResponse = userService.feedCharacter(Long.valueOf(userDetails.getUsername()));
        return ResponseEntity.ok(feedCharacterResponse);
    }

    @GetMapping("/search")
    public ResponseEntity<ResultResponse> getUserList(@RequestParam String userName) {
        List<UserDto> response = userService.findByuserNameStartsWith(userName);
        return ResponseEntity.ok(new ResultResponse(ResultCode.GET_USERLIST_SUCCESS, response));
    }
}
