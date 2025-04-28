package com.project_track.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project_track.domain.NationalParkDomain;
import com.project_track.repository.NationalParkRepository;

@Service
public class NationalParkService {
	@Autowired
	NationalParkRepository national_park_repository;
	
	public List<NationalParkDomain> get_all_list() {
		return national_park_repository.findAll();
	}

}
