package com.kazyu.myapp.entity;

import java.time.LocalDate;


import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Id;
import org.springframework.data.relational.core.mapping.Table;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table("Architect")
public class Architect {
    @Id
    private Integer id;
    private LocalDate day;
    private String title;
}
