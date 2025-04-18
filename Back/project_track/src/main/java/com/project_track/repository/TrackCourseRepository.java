package com.project_track.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project_track.domain.TrackCourseDomain;

@Repository
public interface TrackCourseRepository extends JpaRepository<TrackCourseDomain, Long>{

}
