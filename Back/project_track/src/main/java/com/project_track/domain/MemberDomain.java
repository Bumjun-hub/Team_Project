package com.project_track.domain;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

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
@Entity(name="member")
@DynamicInsert
public class MemberDomain {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long member_no;
	@Column
	@ColumnDefault("'M'")
	private Character member_authority;
	@Column
	private String member_id;
	@Column
	private String member_password;
	@Column
	private String member_name;
	@Column
	private String member_address;
	@Column
	private String member_phone;
	@Column
	private String member_email;
}



