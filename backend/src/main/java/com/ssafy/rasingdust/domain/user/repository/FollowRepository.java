package com.ssafy.rasingdust.domain.user.repository;

import com.ssafy.rasingdust.domain.user.entity.Follow;
import com.ssafy.rasingdust.domain.user.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FollowRepository extends JpaRepository<Follow, Long> {

    @Query("SELECT f FROM Follow f WHERE f.follower.id = :toId AND f.following.id = :fromId")
    Follow followIsExist(@Param("toId") Long toId, @Param("fromId") Long fromId);

    @Query(value = "SELECT u FROM Follow f INNER JOIN User u ON f.following.id = u.id WHERE f.follower.id = :userId")
    List<User> findByFollowing(Long userId);

    @Query(value = "SELECT u FROM Follow f INNER JOIN User u ON f.follower.id = u.id WHERE f.following.id = :userId")
    List<User> findByFollower(Long userId);

}
