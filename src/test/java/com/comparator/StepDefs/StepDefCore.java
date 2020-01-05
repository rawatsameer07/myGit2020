package com.comparator.StepDefs;

import static org.assertj.core.api.Assertions.assertThat;

import com.comparator.BusinessComponent.GoException;
import com.comparator.BusinessComponent.Rest;
import com.comparator.BusinessComponent.HelperUtils; 
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.ReadContext;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.Headers;
import io.restassured.response.Response;

public class StepDefCore {
	public static Headers jsonContentHeader;
	public static Response response;
	public static String url;
	public static ReadContext resJsonContext;
	
private Scenario scenario;
	
	@Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }
	@Given("^I set endpoint as \"([^\"]*)\" with API \"([^\"]*)\"$")
	public static void setEndpoint(String hostPort, String api) throws Exception {
		hostPort = HelperUtils.analyzeValue(hostPort);
		api = HelperUtils.analyzeValue(api);
		url = hostPort + api;
	}
	
	@When("^I invoke the GET API$")
    public void invokeAPI() throws GoException  {
		try {
		System.out.println(jsonContentHeader);
        response = Rest.getResource(url,jsonContentHeader);
        resJsonContext = JsonPath.parse(response.getBody().asString());
        jsonContentHeader=null;
    }catch(Exception e) {
    	throw new GoException("Failed to invoke API-->"+"url",e);
    	}
	}
	
	@Then("^I verify the status code to be \"([^\"]*)\"$")
	public void verifyStatusCode(int expectedStatusCode) {
		int resStatusCode = response.getStatusCode();
		scenario.write("Status Code: "  + resStatusCode);
		assertThat(expectedStatusCode).isEqualTo(resStatusCode);
	}
	
	@Then("^I print response$")
	public void printFullResponse() {
		scenario.write("RESPONSE: " + response.getBody().asString());
	}
	
	@When("^I invoke the GET API$ for multiple request")
    public void invokeAPI() throws GoException  {
		try {
		System.out.println(jsonContentHeader);
        response = Rest.getResource(url,jsonContentHeader);
        resJsonContext = JsonPath.parse(response.getBody().asString());
        jsonContentHeader=null;
    }catch(Exception e) {
    	throw new GoException("Failed to invoke API-->"+"url",e);
    	}
	}
}
