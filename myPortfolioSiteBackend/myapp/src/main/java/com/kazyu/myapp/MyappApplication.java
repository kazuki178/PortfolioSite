package com.kazyu.myapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kazyu.myapp.entity.Architect;
import com.kazyu.myapp.repository.ArchitectCrudRepository;

@SpringBootApplication
public class MyappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyappApplication.class, args);
		//.getBean(MyappApplication.class).execute();

	}

	// 実行確認済み
	// @Autowired
	// ArchitectCrudRepository articleCrudRepository;

	// private void execute() {
	// 	executeSelect();
	// }

	// private void executeSelect() {
	// 	Iterable<Architect> articles = articleCrudRepository.findAll();
	// 	articles.forEach(System.out::println);

	// }

}
