package com.ssafy.rasingdust.domain.user.service;

import com.ssafy.rasingdust.domain.user.dto.response.UserDto;
import com.ssafy.rasingdust.domain.user.dto.request.AddUserRequest;
import com.ssafy.rasingdust.domain.user.dto.response.FeedCharacterResponse;
import com.ssafy.rasingdust.domain.user.entity.User;
import java.util.List;

public interface UserService {
    public User findById(Long userId);
    public User findByUserName(String name);
    public List<UserDto> findByuserNameStartsWith(String userName);
    public Long save(AddUserRequest addUserRequestDto);
    public void followUser(Long toId, Long fromId);
    public void unFollowUser(Long toId, Long fromId);
    public List<UserDto> getFollowingList(Long myId, Long userId);
    public List<UserDto> getFollowerList(Long myId, Long userId);
    public FeedCharacterResponse feedCharacter(Long userId);
}
