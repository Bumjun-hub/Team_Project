package com.project_track.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project_track.domain.NationalParkOfficeDomain;
import com.project_track.id.NationalParkOfficeId;

@Repository
public interface NationalParkOfficeRepository extends JpaRepository<NationalParkOfficeDomain, NationalParkOfficeId>{
	@Query(value="select * from national_park_office where national_park_no=:z ", nativeQuery=true)
	List<NationalParkOfficeDomain> get_list_national_park(@Param("z")Integer national_park_no);

}
