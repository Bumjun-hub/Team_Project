package com.project_track.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/geocode")
public class GeocodeController {

	@Value("${naver.client.id}")
	private String clientId;

	@Value("${naver.client.secret}")
	private String clientSecret;

	private final RestTemplate restTemplate = new RestTemplate();

	@GetMapping
	public ResponseEntity<String> geocode(@RequestParam("query") String query) throws UnsupportedEncodingException {

		String url = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query="
				+ URLEncoder.encode(query, "UTF-8");

		HttpHeaders headers = new HttpHeaders();
		headers.set("X-NCP-APIGW-API-KEY-ID", clientId);
		headers.set("X-NCP-APIGW-API-KEY", clientSecret);
		headers.set("Accept", "application/json");

		HttpEntity<String> entity = new HttpEntity<>(headers);

		ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

		return response;
	}
}
