package com.project_track.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project_track.domain.Test;

public interface TestRepository extends JpaRepository<Test, Long> {
}
