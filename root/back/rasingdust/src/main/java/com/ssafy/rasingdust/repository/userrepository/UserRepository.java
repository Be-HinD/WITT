package com.ssafy.rasingdust.repository.userrepository;

import com.ssafy.rasingdust.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>, UserRepositoryCustom {
}
