package com.project_track.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_one_object")
	public NationalParkDomain get_one_object(@RequestParam("national_park_no") Integer national_park_no) {
		if(national_park_no!=null) {
			Optional<NationalParkDomain> result=national_park_service.get_one_object(national_park_no);
			if(result.isEmpty()) {
				return null;
			}
			return result.get();
		}
		return null;
	}
	
	
	
}
