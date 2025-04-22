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
import com.project_track.repository.TrackRepository;

@RestController
@RequestMapping("/track")
@CrossOrigin(origins = "http://localhost:3000")
public class TrackController {

	@Autowired
	private TrackRepository trackRepository;

	@GetMapping("/all")
	public List<Map<String, String>> getAllTracks() {
		// DB에서 모든 Track 엔티티 조회
		List<TrackDomain> tracks = trackRepository.findAll();

		// 결과 담을 리스트 선언(각 트랙정보를 Map<String,String> 형태로 담을 것)
		List<Map<String, String>> result = new ArrayList<>();

		// 각 Track 객체를 하나씩 반복하면서 Map으로 변환
		for (TrackDomain t : tracks) {
			Map<String, String> map = new HashMap<>();
			map.put("name", t.getTrack_name()); // "name" 키에 산 이름 저장
			map.put("location", t.getTrack_location()); // "Location" 키에 위경도 저장ㄴ
			result.add(map);
		}

		return result;
	}

}
