package com.ssafy.rasingdust.domain.user.repository;

import com.ssafy.rasingdust.domain.user.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(long userId);

    Optional<User> findByUserName(String name);

    List<User> findByuserNameStartsWith(String userName);

    @Query("SELECT COUNT(u) FROM User u WHERE u.growthPoint > :growthPoint")
    int countWithGrowthPointGreaterThan(@Param("growthPoint") int growthPoint);
}
