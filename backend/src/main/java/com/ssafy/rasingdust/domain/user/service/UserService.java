package com.ssafy.rasingdust.domain.user.service;

import com.ssafy.rasingdust.domain.user.entity.User;
import com.ssafy.rasingdust.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User findById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("no user with your request userId"));
    }
}
