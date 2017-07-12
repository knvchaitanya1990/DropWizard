package com.start.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootConfiguration
@ComponentScan
@EnableAutoConfiguration
@CrossOrigin
public class StartBootApplication {

	public static void main(String[] args) {

		SpringApplication.run(StartBootApplication.class, args);

		System.out.println("Spring Boot Aws Demo Appkication Started...");

	}
}