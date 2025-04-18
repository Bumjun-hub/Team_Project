package com.project_track.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project_track.domain.TrackExplorationDomain;

@Repository
public interface TrackExplorationRepository extends JpaRepository<TrackExplorationDomain, Long>{

}
