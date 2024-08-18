package com.kazyu.myapp.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import com.kazyu.myapp.entity.Architect;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.domain.Pageable;



// 詳しくやる
public interface ArchitectCrudRepository extends CrudRepository<Architect, Integer> {
    @Query("SELECT a FROM Architect a WHERE a.day >= :threeMonthsAgo ORDER BY a.day DESC")
    List<Architect> findRecentArchitects(LocalDate threeMonthsAgo, Pageable pageable);
}
