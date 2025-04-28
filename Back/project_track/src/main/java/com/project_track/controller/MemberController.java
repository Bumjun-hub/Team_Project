package com.project_track.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.domain.MemberDomain;
import com.project_track.service.MemberService;

@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired
	MemberService member_service;
	
	@PostMapping("/enroll")
	public void enroll(@RequestBody MemberDomain member_domain) {
		member_service.enroll(member_domain);
	}
}
