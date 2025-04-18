package com.project_track.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project_track.domain.UserDomain;
import com.project_track.repository.UserRepository;

@Service
public class UserService{
	@Autowired
	UserRepository user_repository;

	public void insert() {
		UserDomain user=new UserDomain();
		user.setUser_id("user01");
		user.setUser_password("1234");
		user.setUser_name("강아지");
		user.setUser_address("서울시");
		user_repository.save(user);
	}

}
