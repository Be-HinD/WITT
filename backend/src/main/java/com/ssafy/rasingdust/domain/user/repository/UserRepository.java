package com.ssafy.rasingdust.domain.user.repository;

import com.ssafy.rasingdust.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(long userId);

//    Optional<User> findByEmail(String email);

    Optional<User> findByUserName(String name);
//    List<Follow> findByUsernameAndAgeGreaterThen(String username, int age);
}
