package com.project_track.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="track_description")
public class TrackDescriptionDomain {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long track_description_no;
	@Column
	private Long track_no;
	@Column
	private String track_introduce;
	@Column
	private String track_history;
	@Column
	private Long track_fee;
	@Column
	private String track_caution;
	@Column
	private char track_control;
	@Column
	private String track_weather;
	

}
