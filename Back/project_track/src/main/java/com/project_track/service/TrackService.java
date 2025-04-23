package com.project_track.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project_track.domain.TrackDomain;
import com.project_track.repository.TrackRepository;

@Service
public class TrackService {
	@Autowired
	TrackRepository track_repository;
	public List<TrackDomain> get_track_list_all() {
		return track_repository.findAll();
	}

}
