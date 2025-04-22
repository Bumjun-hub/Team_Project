package com.project_track.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.domain.TrackDomain;
import com.project_track.service.TrackService;

@RestController
@RequestMapping("/track")
@CrossOrigin(origins = "http://localhost:3000")
public class TrackController {

	@Autowired
	TrackService track_service;

	@GetMapping("/get_track_list_all")
	public List<TrackDomain> get_track_list_all() {
		
		List<TrackDomain> track_list=track_service.get_track_list_all();

		return track_list;
	}

}
