package com.kazyu.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kazyu.myapp.entity.Architect;
import com.kazyu.myapp.repository.ArchitectCrudRepository;

@RestController
@RequestMapping("/api/architects")
public class ArchitectController {

    @Autowired
    private ArchitectCrudRepository architectCrudRepository;

    @GetMapping
    public Iterable<Architect> getAllArchitects() {
        return architectCrudRepository.findAll();
    }
}