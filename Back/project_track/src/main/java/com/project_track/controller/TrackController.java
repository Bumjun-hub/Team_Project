package com.project_track.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.domain.TrackDomain;
import com.project_track.id.TrackId;
import com.project_track.service.TrackService;

@RestController
@RequestMapping("/track")
public class TrackController {
	@Autowired
	TrackService track_service;
	
	@GetMapping("/get_all_track_list")
	public List<TrackDomain> get_all_track_list(){
		List<TrackDomain> result_list=track_service.get_all_track_list();
		return result_list;
	}
	
	@GetMapping("/get_track")
	public TrackDomain get_track(@RequestParam("track_no") Integer track_no, @RequestParam("national_park_no") Integer national_park_no) {
		TrackId track_id=new TrackId();
		track_id.setNational_park_no(national_park_no);
		track_id.setTrack_no(track_no);
		
		Optional<TrackDomain> result=track_service.get_track(track_id);
		if(result.isPresent()) {
			System.out.println("1234");
			return result.get();
		}
		return null;
	}
}
