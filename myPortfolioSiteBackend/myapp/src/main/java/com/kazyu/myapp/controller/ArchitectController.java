package com.kazyu.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kazyu.myapp.entity.Architect;
import com.kazyu.myapp.repository.ArchitectCrudRepository;
import java.util.List;

@RestController
@RequestMapping("/api/architects")
public class ArchitectController {
    @Autowired
    private ArchitectCrudRepository architectCrudRepository;

    @GetMapping
    public List<Architect> getRecentArchitects() {
        Pageable pageable = PageRequest.of(0, 10);
        return architectCrudRepository.findRecentArchitects(pageable);
    }
}
