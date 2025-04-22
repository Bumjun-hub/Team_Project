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
@Entity(name="track")
public class TrackDomain {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long track_no;
	@Column
	private char track_type;
	@Column
	private String track_name;
	@Column
	private String track_location;	
	
}
