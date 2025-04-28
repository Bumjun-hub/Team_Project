package com.project_track.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project_track.domain.ReviewDomain;
import com.project_track.repository.ReviewRepository;

@Service
public class ReviewService {
	@Autowired
	ReviewRepository review_repository;
	
	public void post_review(ReviewDomain review_domain) {
		review_repository.save(review_domain);
	}

}
