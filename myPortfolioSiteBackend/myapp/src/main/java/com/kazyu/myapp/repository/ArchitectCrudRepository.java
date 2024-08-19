package com.kazyu.myapp.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kazyu.myapp.entity.Architect;
import java.util.List;
import org.springframework.data.domain.Pageable;

@Repository
public interface ArchitectCrudRepository extends CrudRepository<Architect, Integer> {
    @Query("SELECT * FROM Architect WHERE day >= CURRENT_DATE - INTERVAL '3 months' ORDER BY day DESC")
    List<Architect> findRecentArchitects(Pageable pageable);
}