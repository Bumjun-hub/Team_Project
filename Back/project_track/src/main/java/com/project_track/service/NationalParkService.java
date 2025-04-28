package com.project_track.service;

import java.util.List;
import java.util.Optional;

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

	public Optional<NationalParkDomain> get_one_object(Integer national_park_no) {
		return national_park_repository.findById(national_park_no);
	}

}
