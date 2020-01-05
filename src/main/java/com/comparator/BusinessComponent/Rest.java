package com.comparator.BusinessComponent;

import static io.restassured.RestAssured.given;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


import io.restassured.http.Headers;
import io.restassured.response.Response;

public class Rest {
	private static final String JSON_TYPE = "application/json";
	private static final Logger LOGGER = LogManager.getLogger(Rest.class);
	// Below method is use to invoke the request urls retrieved from the files.
	public static final Response getResource(final String url, Headers jsonContentHeader) throws GoException {
	try {
		if (jsonContentHeader != null) {
			return given().headers(jsonContentHeader).contentType(Rest.JSON_TYPE).when().get(url);
		} else
			return given().contentType(Rest.JSON_TYPE).when().get(url);
	}
	catch(Exception e)
		{
		throw new GoException("Failed to fetch Response",e);
		}
	}
}
