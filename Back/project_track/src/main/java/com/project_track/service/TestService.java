package com.project_track.service;

import org.springframework.stereotype.Service;

import com.project_track.domain.Test;
import com.project_track.repository.TestRepository;

import java.util.List;

@Service
public class TestService {

    private final TestRepository repository;

    public TestService(TestRepository repository) {
        this.repository = repository;
    }

    public List<Test> findAll() {
        return repository.findAll();
    }
}
