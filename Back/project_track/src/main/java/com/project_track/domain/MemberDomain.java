package com.project_track.domain;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="member")
public class MemberDomain {
	@Id
	private String member_id;
	@Column(nullable=false)
	private String member_password;
	@Column(nullable=false)
	@ColumnDefault("'M'")
	private Character member_authority;
	@Column(nullable=false)
	private String member_name;
	@Column
	private String member_phone;
	@Column
	private String member_email;
	@Column
	private String member_address;
	
	
}
