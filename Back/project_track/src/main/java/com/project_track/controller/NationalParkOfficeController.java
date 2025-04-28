package com.project_track.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.domain.NationalParkOfficeDomain;
import com.project_track.id.NationalParkOfficeId;
import com.project_track.service.NationalParkOfficeService;

@RestController
@RequestMapping("/national_park_office")
public class NationalParkOfficeController {
	@Autowired
	NationalParkOfficeService national_park_office_service;
	
	@GetMapping("/get_all_list")
	public List<NationalParkOfficeDomain> get_all_list(){
		List<NationalParkOfficeDomain> result_list=national_park_office_service.get_all_list();
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_list_national_park")
	public List<NationalParkOfficeDomain> get_list_national_park(@RequestParam("national_park_no") Integer national_park_no){
		if(national_park_no==null) {
			return null;
		}
		List<NationalParkOfficeDomain> result_list=national_park_office_service.get_list_national_park(national_park_no);
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_one_object")
	public NationalParkOfficeDomain get_one_object(@RequestParam("national_park_no") Integer national_park_no, @RequestParam("national_park_office_no") Integer national_park_office_no) {
		if(national_park_no==null||national_park_office_no==null) {
			return null;
		}
		NationalParkOfficeId national_park_office_id=new NationalParkOfficeId();
		national_park_office_id.setNational_park_no(national_park_no);
		national_park_office_id.setNational_park_office_no(national_park_office_no);	
		Optional<NationalParkOfficeDomain> result=national_park_office_service.get_one_object(national_park_office_id);
		if(result.isPresent()) {
			return result.get();
		}
		return null;
	}
}
