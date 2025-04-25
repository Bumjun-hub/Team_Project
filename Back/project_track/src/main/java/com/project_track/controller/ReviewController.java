package com.project_track.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.domain.ReviewDomain;
import com.project_track.service.ReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired
	ReviewService review_service;
	
	@PostMapping("/post_review")
	public void post_review(@RequestBody ReviewDomain review_domain) {
		review_service.post_review(review_domain);
	}
}
