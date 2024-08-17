package com.kazyu.myapp.entity;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Architect {
    @Id
    private Integer id;
    private LocalDate day;
    private String title;
}
