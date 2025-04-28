package com.project_track.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project_track.domain.MemberDomain;
import com.project_track.repository.MemberRepository;

@Service
public class MemberService {
	@Autowired
	MemberRepository member_repository;
	
	public void enroll(MemberDomain member_domain) {
		member_repository.save(member_domain);
	}

}
