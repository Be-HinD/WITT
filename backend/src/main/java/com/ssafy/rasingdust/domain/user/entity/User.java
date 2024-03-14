package com.ssafy.rasingdust.domain.user.entity;

import com.ssafy.rasingdust.domain.alarm.entity.Alarm;
import com.ssafy.rasingdust.domain.follow.entity.Follow;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_name", nullable = false, unique = true)
    private String userName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private  String password;

    @Column(name = "create_date", nullable = false, updatable = false)
    private LocalDateTime createDate = LocalDateTime.now();

    @Column(name = "solved_cnt", nullable = false)
    private int solvedCnt = 0;

    @Column(name = "bottle", nullable = false)
    private int bottle = 0;

    @Column(name = "growth_point", nullable = false)
    private int growthPoint = 0;

    @Builder
    public User(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    // 알람 테이블 연관
    // 내가 받은 알람 리스트만 있으면 됨. user.getReceiveAlarmList();
    @OneToMany(mappedBy = "receiver")
    private List<Alarm> receiveAlarmList = new ArrayList<>();

    @OneToMany(mappedBy = "sender")
    private List<Alarm> sendeAlarmList = new ArrayList<>();

    // 팔로우 테이블 연관
    // 사용자가 팔로우하는 관계
    @OneToMany(mappedBy = "follower", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Follow> followerList = new ArrayList<>();

    // 사용자를 팔로우하는 관계
    @OneToMany(mappedBy = "following", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Follow> followingList = new ArrayList<>();

    // 사용자 이름 수정 메서드
    public User updateUserName(String userName) {
        this.userName = userName;
        return this;
    }

    // 이후 권한이 여러가지 생기면 추가해야됨
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("user"));
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
