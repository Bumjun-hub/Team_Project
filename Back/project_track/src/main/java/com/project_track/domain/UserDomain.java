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
@Entity(name="user")
@DynamicInsert
public class UserDomain {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_no;
	@Column
	@ColumnDefault("U")
	private char user_authority;
	@Column
	private String user_id;
	@Column
	private String user_password;
	@Column
	private String user_name;
	@Column
	private String user_address;
	@Column
	private String user_phone;
	@Column
	private String user_email;
}
