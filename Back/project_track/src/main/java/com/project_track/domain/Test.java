package com.project_track.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int trackNo;
    private String parkName;
    private String trackName;
    private String startPointName;
    private String startPointAddress;
    private Double latitude;
    private Double longitude;
}

