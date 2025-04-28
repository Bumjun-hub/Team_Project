package com.project_track.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project_track.domain.ReviewDomain;
import com.project_track.id.TrackId;
import com.project_track.service.ReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {
	@Autowired
	ReviewService review_service;
	
	@GetMapping("/get_all_list")
	public List<ReviewDomain> get_all_list(){
		List<ReviewDomain> result_list=review_service.get_all_list();
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_list_track")
	public List<ReviewDomain> get_list_track(@RequestParam("track_no") Integer track_no, @RequestParam("national_park_no") Integer national_park_no){
		if(track_no==null||national_park_no==null) {
			return null;
		}
		TrackId track_id=new TrackId();
		track_id.setNational_park_no(national_park_no);
		track_id.setTrack_no(track_no);
		List<ReviewDomain> result_list=review_service.get_list_track(track_id);
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_list_member")
	public List<ReviewDomain> get_list_member(@RequestParam("member_id") String member_id){
		if(member_id==null) {
			return null;
		}
		List<ReviewDomain> result_list=review_service.get_list_member(member_id);
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_list_national_park")
	public List<ReviewDomain> get_list_national_park(@RequestParam("national_park_no") Integer national_park_no){
		if(national_park_no==null) {
			return null;
		}
		List<ReviewDomain> result_list=review_service.get_list_national_park(national_park_no);
		if(result_list!=null) {
			return result_list;
		}
		return null;
	}
	
	@GetMapping("/get_one_object")
	public ReviewDomain get_one_object(@RequestParam("review_no") Integer review_no) {
		if(review_no==null) {
			return null;
		}
		Optional<ReviewDomain> result_review=review_service.get_one_object(review_no);
		if(result_review.isPresent()) {
			return result_review.get();
		}
		return null;
	}
	
	@PostMapping("/add")
	public int add(@RequestBody ReviewDomain review_domain) {
		if(review_domain.getMember_id()==null||review_domain.getTrack_no()==null||review_domain.getNational_park_no()==null||review_domain.getReview_content()==null) {
			return 1900;
		}
		switch(review_domain.getNational_park_no()) {
			case 1:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=7) {
					break;
				}else {
					return 1402;
				}
			case 2:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=7) {
					break;
				}else {
					return 1402;
				}
			case 3:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=9) {
					break;
				}else {
					return 1402;
				}
			case 4:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=10) {
					break;
				}else {
					return 1402;
				}
			case 5:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=13) {
					break;
				}else {
					return 1402;
				}
			case 6:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=8) {
					break;
				}else {
					return 1402;
				}
			case 7:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=8) {
					break;
				}else {
					return 1402;
				}
			case 8:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=8) {
					break;
				}else {
					return 1402;
				}
			case 9:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=14) {
					break;
				}else {
					return 1402;
				}
			case 10:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=7) {
					break;
				}else {
					return 1402;
				}
			case 11:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=18) {
					break;
				}else {
					return 1402;
				}
			case 12:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=8) {
					break;
				}else {
					return 1402;
				}
			case 13:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=13) {
					break;
				}else {
					return 1402;
				}
			case 14:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=6) {
					break;
				}else {
					return 1402;
				}
			case 15:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=7) {
					break;
				}else {
					return 1402;
				}
			case 16:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=16) {
					break;
				}else {
					return 1402;
				}
			case 17:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=11) {
					break;
				}else {
					return 1402;
				}
			case 18:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=4) {
					break;
				}else {
					return 1402;
				}
			case 19:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=2) {
					break;
				}else {
					return 1402;
				}
			case 20:
				if(review_domain.getTrack_no()>=1&&review_domain.getTrack_no()<=7) {
					break;
				}else {
					return 1402;
				}
			default:
				return 1403;
		}
		ReviewDomain result_review=review_service.add(review_domain);
		if(result_review!=null) {
			return 1400;
		}
		return 1401;
	}
	
	@PutMapping("/modify")
	public int modify(@RequestBody ReviewDomain review_domain) {
		if(review_domain.getReview_no()==null||review_domain.getReview_content()==null) {
			return 1900;
		}
		Optional<ReviewDomain> result=review_service.get_one_object(review_domain.getReview_no());
		if(result.isPresent()) {
			ReviewDomain temp=result.get();
			if(review_domain.getReview_content().equals(temp.getReview_content())) {
				return 1413;
			}
			review_domain.setMember_id(temp.getMember_id());
			review_domain.setTrack_no(temp.getTrack_no());
			review_domain.setNational_park_no(temp.getNational_park_no());
			review_domain.setReview_created_date(temp.getReview_created_date());
			ReviewDomain result_review=review_service.modify(review_domain);
			if(result_review==null) {
				return 1411;
			}
			return 1410;
		}else {
			return 1412;
		}
	}
	
	@DeleteMapping("/delete")
	public int delete(@RequestBody ReviewDomain review_domain) {
		Optional<ReviewDomain> result_review=review_service.delete(review_domain.getReview_no());
		if(result_review.isEmpty()) {
			return 1420;
		}
		return 1421;
	}
	
	
	
	
	
	
	
	
	
	
}
