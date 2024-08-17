package com.kazyu.myapp.repository;

import org.springframework.data.repository.CrudRepository;
import com.kazyu.myapp.entity.Architect;

public interface ArchitectCrudRepository extends CrudRepository<Architect, Integer> {

}
