package com.ssafy.rasingdust.domain.user.service;

import com.ssafy.rasingdust.domain.user.dto.response.UserDto;
import com.ssafy.rasingdust.domain.user.dto.request.AddUserRequest;
import com.ssafy.rasingdust.domain.user.dto.response.FeedCharacterResponse;
import com.ssafy.rasingdust.domain.user.entity.Follow;
import com.ssafy.rasingdust.domain.user.entity.User;
import com.ssafy.rasingdust.domain.user.repository.FollowRepository;
import com.ssafy.rasingdust.domain.user.repository.UserRepository;
import com.ssafy.rasingdust.global.exception.BusinessLogicException;
import com.ssafy.rasingdust.global.exception.ErrorCode;
import jakarta.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final FollowRepository followRepository;

    @Override
    public User findById(Long userId) {
        return userRepository.findById(userId)
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    public User findByUserName(String name) {
        return userRepository.findByUserName(name)
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.USER_NOT_FOUND));
    }

    @Override
    public List<UserDto> findByuserNameStartsWith(String userName) {

        List<User> userList = userRepository.findByuserNameStartsWith(userName);

        if(userList == null || userList.isEmpty()) {
            throw new BusinessLogicException(ErrorCode.USER_NOT_FOUND);
        }

        ModelMapper modelMapper = new ModelMapper();
        List<UserDto> resultDto = userList.stream()
            .map(data -> modelMapper.map(data, UserDto.class))
            .collect(Collectors.toList());



        return resultDto;
    }


    // 유저 생성 메서드
    @Override
    public Long save(AddUserRequest addUserRequestDto) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        return userRepository.save(
                User.builder()
                        .build())
                .getId();


    }
    @Override
    public void followUser(Long toId, Long fromId) {

        //예외처리 : 자기 자신을 팔로우하려는 경우
        if(toId.equals(fromId)) {
            throw new BusinessLogicException(ErrorCode.FOLLOW_BAD_REQUEST);
        }

        Follow follow = Follow.builder()
            .follower(userRepository.findById(toId)
                .orElseThrow(() -> new BusinessLogicException(ErrorCode.USER_NOT_FOUND)))
            .following(userRepository.findById(fromId)
                .orElseThrow(() -> new BusinessLogicException(ErrorCode.USER_NOT_FOUND)))
            .build();

        //유니크 제약조건 예외 방지를 위한 체크 로직 추가
        Optional<Follow> isFollowExist = Optional.ofNullable(
            followRepository.followIsExist(toId, fromId));

        if(isFollowExist.isPresent()) {
            throw new BusinessLogicException(ErrorCode.FOLLOW_ALREADY_EXIST);
        }

        followRepository.save(follow);

    }

    @Override
    public void unFollowUser(Long toId, Long fromId) {

        //예외처리 : 팔로우 관계가 존재하지 않는 경우
        Optional<Follow> isFollowExist = Optional.ofNullable(
            followRepository.followIsExist(toId, fromId));

        if(isFollowExist.isEmpty()) {
            throw new BusinessLogicException(ErrorCode.FOLLOW_NOT_FOUND);
        }

        Follow follow = isFollowExist.get();
        followRepository.deleteById(follow.getId());

    }

    /**
     * 내 팔로우 목록을 조회할 경우
     * 맞팔 Status를 체크할 필요 없음.
     * 다른 사람의 팔로우 목록을 조회할 경우
     * 맞팔 Status 체크 로직 추가
     * **/
    @Override
    public List<UserDto> getFollowingList(Long myId, Long userId) {


        Optional<User> user = userRepository.findById(userId);

        Optional<User> currentUser = userRepository.findById(myId);

        //예외처리 : 유저가 존재하지 않는 경우
        if(user.isEmpty() || currentUser.isEmpty()) {
            throw new BusinessLogicException(ErrorCode.USER_NOT_FOUND);
        }

        //해당 유저의 팔로잉리스트를 조회
        List<User> followingList = followRepository.findByFollowing(user.get().getId());

        /**다른 유저의 팔로잉 리스트를 조회할 경우
         * 다른 유저의 팔로워들이 현재 유저를 팔로우하고 있는지 체크
         * 다른 유저가 팔로우하고 있는 사람이 현재 로그인한 유저도 팔로우 하고있다면 true값 세팅
         * */
        if(!userId.equals(myId)) {
            List<User> currentUserFollowList = followRepository.findByFollowing(myId);   //로그인한 유저의 팔로우 리스트

            followingList.remove(currentUser.get());    //현재 로그인한 유저가 포함될 경우 제거

            for(User follow : followingList) {
                if(currentUserFollowList.contains(follow)) {
                    follow.setFollow(true);
                }
            }
        }

        ModelMapper modelMapper = new ModelMapper();

        List<UserDto> resultDto = followingList.stream()
            .map(data -> modelMapper.map(data, UserDto.class))
            .collect(Collectors.toList());

        return resultDto;
    }

    @Override
    public List<UserDto> getFollowerList(Long myId, Long userId) {

        Optional<User> user = userRepository.findById(userId);

        Optional<User> currentUser = userRepository.findById(myId);

        //예외처리 : 유저가 존재하지 않는 경우
        if(user.isEmpty() || currentUser.isEmpty()) {
            throw new BusinessLogicException(ErrorCode.USER_NOT_FOUND);
        }

        //해당 유저의 팔로워리스트를 조회
        List<User> followerList = followRepository.findByFollower(user.get().getId());

        /**다른 유저의 팔로워 리스트를 조회할 경우
         * 다른 유저의 팔로워들이 현재 로그인한 유저가 팔로우 하고있는지 체크
         * 팔로잉 리스트 조회 비즈니스 로직과 동일
         * */
        if(!userId.equals(myId)) {
            List<User> currentUserFollowingList = followRepository.findByFollowing(myId);   //로그인한 유저의 팔로우 리스트

            followerList.remove(currentUser.get());     //현재 로그인한 유저가 포함될 경우 제거

            for(User follow : followerList) {
                if(currentUserFollowingList.contains(follow)) {
                    follow.setFollow(true);
                }
            }
        }

        ModelMapper modelMapper = new ModelMapper();

        List<UserDto> resultDto = followerList.stream()
            .map(data -> modelMapper.map(data, UserDto.class))
            .collect(Collectors.toList());

        return resultDto;
    }

    @Override
    public FeedCharacterResponse feedCharacter(Long userId) {
        User findUser = userRepository.findById(userId)
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.USER_NOT_FOUND));

        findUser.feedCharacter();
        return FeedCharacterResponse.builder()
            .bottle(findUser.getBottle())
            .growthPoint(findUser.getGrowthPoint())
            .build();
    }

    /**
     * Test를 위한 초기화
     * **/
    @PostConstruct
    void init() {
        for(int i=0; i<10; i++) {
            StringBuilder sb = new StringBuilder();
            sb.append("Dummy").append(i);
            userRepository.save(User.builder()
                    .userName(String.valueOf(sb))
                    .build()
            );
        }
    }
}
