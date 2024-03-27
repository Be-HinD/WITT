package com.ssafy.rasingdust.domain.user.service;

import com.ssafy.rasingdust.domain.user.dto.UserDto;
import com.ssafy.rasingdust.domain.user.dto.request.AddUserRequest;
import com.ssafy.rasingdust.domain.user.dto.response.FeedCharacterResponse;
import com.ssafy.rasingdust.domain.user.dto.response.GetUserResponse;
import com.ssafy.rasingdust.domain.user.dto.response.VisitUserResponse;
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


        Optional<Follow> isFollowExist = Optional.ofNullable(
            followRepository.followIsExist(toId, fromId));

        if(isFollowExist.isEmpty()) {
            throw new BusinessLogicException(ErrorCode.FOLLOW_NOT_FOUND);
        }

        Follow follow = isFollowExist.get();
        followRepository.deleteById(follow.getId());

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

    @Override
    public VisitUserResponse visitUser(Long visitorId, Long invitorId) {
        User invitor = userRepository.findById(invitorId)
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.USER_NOT_FOUND));
        boolean isFollowing = false;
        boolean isFollower = false;

        List<Follow> followerList = invitor.getFollowerList();
        List<Follow> followingList = invitor.getFollowingList();
        for (Follow follower : followerList) {
            if(follower.getId().equals(visitorId)){
                isFollowing = true;
                break;
            }
        }

        for (Follow following : followingList) {
            if(following.getId().equals(visitorId)) {
                isFollower = true;
                break;
            }
        }

        return VisitUserResponse.builder()
            .id(invitor.getId())
            .userName(invitor.getUsername())
            .solvedCnt(invitor.getSolvedCnt())
            .bottle(invitor.getBottle())
            .growthPoint(invitor.getGrowthPoint())
            .isFollowing(isFollowing)
            .isFollower(isFollower)
            .build();
    }

    @Override
    public int getUserRank(Long userId) {
        User user = findById(userId);
        return userRepository.countWithGrowthPointGreaterThan(user.getGrowthPoint()) + 1;
    }

    @Override
    public GetUserResponse getUser(Long userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.USER_NOT_FOUND));
        int rank = getUserRank(userId);

        return GetUserResponse.builder()
            .id(user.getId())
            .userName(user.getUsername())
            .solvedCnt(user.getSolvedCnt())
            .bottle(user.getBottle())
            .growthPoint(user.getGrowthPoint())
            .rank(rank)
            .build();
    }

    @PostConstruct
    void init() {
        for(int i=0; i<10; i++) {
            StringBuilder sb = new StringBuilder();
            sb.append("bee").append(i);
            userRepository.save(User.builder()
                    .userName(String.valueOf(sb))
                    .build()
            );
        }
    }
}