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
	
	@GetMapping("/get_all_list")
	public List<TrackDomain> get_all_track_list(){
		List<TrackDomain> result_list=track_service.get_all_track_list();
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_list_national_park")
	public List<TrackDomain> get_list_national_park(@RequestParam("national_park_no") Integer national_park_no){
		if(national_park_no==null) {
			return null;
		}
		List<TrackDomain> result_list=track_service.get_list_national_park(national_park_no);
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_one_object")
	public TrackDomain get_one_object(@RequestParam("track_no") Integer track_no, @RequestParam("national_park_no") Integer national_park_no) {
		if(track_no==null||national_park_no==null) {
			return null;
		}
		TrackId track_id=new TrackId();
		track_id.setNational_park_no(national_park_no);
		track_id.setTrack_no(track_no);
		Optional<TrackDomain> result=track_service.get_one_object(track_id);
		if(result.isPresent()) {
			return result.get();
		}
		return null;
	}
}
