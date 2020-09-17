package com.statistics.core.service.user;

import com.statistics.core.entity.user.User;
import com.statistics.core.entity.user.User_;
import com.statistics.core.entity.user.specification.UserSpecification;
import com.statistics.core.error.exception.ActionForbiddenException;
import com.statistics.core.error.exception.NoDataFoundException;
import com.statistics.core.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.UUID;

@Service
public class UserService implements UserDetailsService {

  private UserRepository repository;
  private UserSpecification specification;

  @Autowired
  public UserService(UserRepository repository, UserSpecification specification) {
    this.repository = repository;
    this.specification = specification;
  }

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String email) {
    return findByEmail(email);
  }

  public User getCurrentUser() {
    String email = SecurityContextHolder.getContext().getAuthentication().getName();
    return findByEmail(email);
  }

  public User setRefreshToken(User user, long jwtRefreshTokenExpirationInMs) {
    if (user.getId() == null) {
      throw new ActionForbiddenException("User id must not be null when set refresh token");
    }
    user.setJwtRefreshToken(UUID.randomUUID().toString());
    user.setJwtRefreshTokenExpireDate(getJwtRefreshTokenExpireTimeInMs(jwtRefreshTokenExpirationInMs));
    return repository.save(user);
  }

  private Date getJwtRefreshTokenExpireTimeInMs(long jwtRefreshTokenExpirationInMs) {
    return new Date(System.currentTimeMillis() + jwtRefreshTokenExpirationInMs);
  }

  public User findByRefreshToken(String jwtRefreshToken) {
    return repository.findOne(specification.entityFieldEquals(User_.jwtRefreshToken, jwtRefreshToken))
        .orElseThrow(() -> new NoDataFoundException("User not found by refresh token " + jwtRefreshToken));
  }

  public User findByEmail(String email) {
    return repository.findOne(specification.entityFieldEquals(User_.email, email))
        .orElseThrow(() -> new NoDataFoundException("User not found by email " + email));
  }
}