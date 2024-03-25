package com.ssafy.rasingdust.domain.user.service;

import com.ssafy.rasingdust.domain.user.dto.request.AddUserRequest;
import com.ssafy.rasingdust.domain.user.dto.response.FeedCharacterResponse;
import com.ssafy.rasingdust.domain.user.dto.response.FollowResponse;
import com.ssafy.rasingdust.domain.user.entity.User;
import java.util.List;

public interface UserService {
    public User findById(Long userId);
    public User findByUserName(String name);
    public List<User> findByuserNameStartsWith(String userName);
    public Long save(AddUserRequest addUserRequestDto);
    public void followUser(Long toId, Long fromId);
    public void unFollowUser(Long toId, Long fromId);
    public FeedCharacterResponse feedCharacter(Long userId);
}
