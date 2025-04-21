package com.project_track.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.service.MemberService;

@RestController
@RequestMapping("/user")
public class MemberController {
	@Autowired
	MemberService Member_service;
	
	@PostMapping("/insert")
	public String insert() {
		System.out.println("테스트");
		Member_service.insert();
		return "success";
	}
}
