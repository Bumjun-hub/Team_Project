package com.project_track.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project_track.domain.MemberDomain;
import com.project_track.repository.MemberRepository;

@Service
public class MemberService{
	@Autowired
	MemberRepository member_repository;

	public void insert() {
		MemberDomain member=new MemberDomain();
		member.setMember_id("user01");
		member.setMember_password("1234");
		member.setMember_name("강아지");
		member.setMember_address("서울시");
		member_repository.save(member);
	}

}
