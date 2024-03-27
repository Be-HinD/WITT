package com.ssafy.rasingdust.domain.user.controller;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.rasingdust.domain.user.dto.UserDto;
import com.ssafy.rasingdust.domain.user.dto.response.FeedCharacterResponse;
import com.ssafy.rasingdust.domain.user.dto.response.GetUserResponse;
import com.ssafy.rasingdust.domain.user.dto.response.VisitUserResponse;
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

    @GetMapping()
    public ResponseEntity<ResultResponse> getUser(@AuthenticationPrincipal UserDetails userDetails) {
        GetUserResponse response = userService.getUser(Long.valueOf(userDetails.getUsername()));
        return ResponseEntity.ok(new ResultResponse(ResultCode.GET_USER_SUCCESS, response));
    }

    @PostMapping("/follow/{followId}")
    public ResponseEntity<ResultResponse> followUser(@AuthenticationPrincipal UserDetails userDetails ,@PathVariable Long followId) {

        userService.followUser(Long.valueOf(userDetails.getUsername()), followId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.CREATE_FOLLOW_SUCCESS));
    }

    @DeleteMapping("/unfollow/{followId}")
    public ResponseEntity<ResultResponse> unfollowUser(@AuthenticationPrincipal UserDetails userDetails, @PathVariable Long followId) {
        userService.unFollowUser(Long.valueOf(userDetails.getUsername()), followId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.DELETE__UNFOLLOW_SUCCESS));
    }

    @PostMapping("/character")
    public ResponseEntity<FeedCharacterResponse> feedCharacter(@AuthenticationPrincipal UserDetails userDetails) {
        FeedCharacterResponse feedCharacterResponse = userService.feedCharacter(Long.valueOf(userDetails.getUsername()));
        return ResponseEntity.ok(feedCharacterResponse);
    }

    @GetMapping("/search")
    @JsonIgnore
    public ResponseEntity<ResultResponse> getUserList(@RequestParam String userName) {
        List<UserDto> response = userService.findByuserNameStartsWith(userName);
        return ResponseEntity.ok(new ResultResponse(ResultCode.GET_USERLIST_SUCCESS, response));
    }

    @GetMapping("/invitor/{userId}")
    public ResponseEntity<ResultResponse> visitUser(
        @AuthenticationPrincipal UserDetails userDetails,
        @PathVariable Long userId){
        VisitUserResponse response = userService.visitUser(Long.valueOf(userDetails.getUsername()), userId);
        return ResponseEntity.ok(new ResultResponse(ResultCode.GET_VISITUSER_SUCCESS, response));
    }

    @GetMapping("/rank")
    public ResponseEntity<ResultResponse> getUserRank(@AuthenticationPrincipal UserDetails userDetails) {
        int response = userService.getUserRank(Long.valueOf(userDetails.getUsername()));
        return ResponseEntity.ok(new ResultResponse(ResultCode.GET_USER_RANK_SUCCESS, response));
    }

}
