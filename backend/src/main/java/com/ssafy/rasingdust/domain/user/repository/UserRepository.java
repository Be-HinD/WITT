package com.ssafy.rasingdust.domain.user.repository;

import com.ssafy.rasingdust.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
