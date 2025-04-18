package com.project_track.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project_track.domain.UserDomain;

@Repository
public interface UserRepository extends JpaRepository<UserDomain, Long>{

}
