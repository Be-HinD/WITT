package com.ssafy.rasingdust.domain.user.repository;

import com.ssafy.rasingdust.domain.user.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FollowRepository extends JpaRepository<Follow, Long> {

    @Query("SELECT f FROM Follow f WHERE f.follower.id = :toId AND f.following.id = :fromId")
    Follow followIsExist(@Param("toId") Long toId, @Param("fromId") Long fromId);

}
