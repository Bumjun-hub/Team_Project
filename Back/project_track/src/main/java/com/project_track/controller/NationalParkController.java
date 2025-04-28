package com.project_track.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.domain.NationalParkDomain;
import com.project_track.service.NationalParkService;

@RestController
@RequestMapping("/national_park")
public class NationalParkController {
	@Autowired
	NationalParkService national_park_service;
	
	@GetMapping("/get_all_list")
	public List<NationalParkDomain> get_all_list(){
		List<NationalParkDomain> result_list=national_park_service.get_all_list();
		return result_list;
	}
}
