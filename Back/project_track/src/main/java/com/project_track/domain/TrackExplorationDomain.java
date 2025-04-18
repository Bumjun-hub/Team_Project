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
@Entity(name="track_exploration")
public class TrackExplorationDomain {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long track_exploration_no;
	@Column
	private Long track_no;
	@Column
	private String flower;
	@Column
	private String tree;

}
