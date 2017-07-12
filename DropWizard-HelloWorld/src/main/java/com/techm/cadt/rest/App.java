package com.techm.cadt.rest;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.techm.cadt.HelloWorld.HelloWorldConfiguration;
import com.techm.cadt.resource.HelloWorldController;

public class App extends Application<HelloWorldConfiguration> {
	private static final Logger LOGGER = LoggerFactory.getLogger(App.class);

	@Override
	public void initialize(Bootstrap<HelloWorldConfiguration> b) {
	}

	public void run(HelloWorldConfiguration c, Environment e) throws Exception {
		LOGGER.info("Method App#run() called");
		for (int i = 0; i < c.getMessageRepetitions(); i++) {
			System.out.println(c.getMessage());
		}
		
		// Registerring Resource.
		
		e.jersey().register(new HelloWorldController());
		
	}

	public static void main(String[] args) throws Exception {
		new App().run(args);

	}
}