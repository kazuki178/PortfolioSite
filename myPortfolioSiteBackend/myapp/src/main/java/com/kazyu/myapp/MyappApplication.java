package com.kazyu.myapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kazyu.myapp.entity.Architect;
import com.kazyu.myapp.repository.ArchitectCrudRepository;

@SpringBootApplication
public class MyappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyappApplication.class, args).getBean(MyappApplication.class).execute();

	}
	@Autowired
	ArchitectCrudRepository articleCrudRepository;

	private void execute() {
		// 全権取得
		executeSelect();
	}

	// 全権取得
	private void executeSelect() {
		// 全権取得
		Iterable<Architect> articles = articleCrudRepository.findAll();
		for (Architect article : articles) {
			System.out.println(article);
		}
	}

}
