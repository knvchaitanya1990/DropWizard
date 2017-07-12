package com.techm.cadt.HelloWorld;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;

public class HelloWorldConfiguration extends Configuration {

	@JsonProperty
	private String message;
	@JsonProperty
	private int messageRepetitions;

	public String getMessage() {
		return message;
	}

	public int getMessageRepetitions() {
		return messageRepetitions;
	}
}
