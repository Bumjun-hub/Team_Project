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
@Entity(name="track_course")
public class TrackCourseDomain {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long track_course_no;
	@Column
	private Long track_no;
	@Column
	private String track_course_introduce;
	@Column
	private String track_course_directions;
	@Column
	private String track_course_type;
	@Column
	private char track_course_level;
	@Column
	private Long track_course_time;
	@Column
	private Long track_course_distance;
}
