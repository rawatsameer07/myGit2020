package com.comparator.StepDefs;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import com.comparator.BusinessComponent.GoException;
import com.comparator.BusinessComponent.Rest;
import com.comparator.BusinessComponent.HelperUtils;
import com.comparator.BusinessComponent.ReadExcelMultiple;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.ReadContext;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.response.Response;

public class StepDefCore {
	public static Headers jsonContentHeader;
	public static Response response;
	public static List<Response> responseMultipleFile[] = null;
	public static String url;
	public static String urlMultipleFile;
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

	public static List<Header> listHeaders = new ArrayList<Header>();

	@Then("^I add request header \"([^\"]*)\" as \"([^\"]*)\"$")
	public static void addRequestHeaders(String key, String value) throws Exception {
		String value1 = HelperUtils.analyzeValue(value);
		listHeaders.add(new Header(key, value1));
		jsonContentHeader = new Headers(listHeaders);
	}

	@When("^I invoke the GET API$")
	public void invokeAPI() throws GoException {
		try {
			response = Rest.getResource(url, jsonContentHeader);
			resJsonContext = JsonPath.parse(response.getBody().asString());
			jsonContentHeader = null;
		} catch (Exception e) {
			throw new GoException("Failed to invoke API-->" + "url", e);
		}
	}

	@Then("^I verify the status code to be \"([^\"]*)\"$")
	public void verifyStatusCode(int expectedStatusCode) {
		int resStatusCode = response.getStatusCode();
		scenario.write("Status Code: " + resStatusCode);
		assertThat(expectedStatusCode).isEqualTo(resStatusCode);
	}

	@Then("^I print response$")
	public void printFullResponse() {
		scenario.write("RESPONSE: " + response.getBody().asString());
	}

	@When("^I invoke request urls provided in file and validate the response$")
	public void invokeRequestUrlsMultipleFiles() throws GoException {
		try {
			boolean flag = false;
			int maxIteration = HelperUtils.getMaxLength();
			String tempReqUrl[] = new String[ReadExcelMultiple.requestUrls.length];
			responseMultipleFile = new List[ReadExcelMultiple.requestUrls.length];

			for (int i = 0; i < maxIteration; i++) {
				flag = false;
				for (int j = 0; j < ReadExcelMultiple.requestUrls.length; j++) {
					try {
						responseMultipleFile[j] = new ArrayList<Response>();
						urlMultipleFile = ReadExcelMultiple.requestUrls[j].get(i);
						tempReqUrl[j] = urlMultipleFile;
						System.out.println(urlMultipleFile);
						response = Rest.getResource(urlMultipleFile, jsonContentHeader);
						responseMultipleFile[j].add(response);
					} catch (Exception e) {
						scenario.write("Column Number: " + maxIteration + " Request url not found");
					}
				}
				for (int k = 0; k < responseMultipleFile.length; k++) {
					for (int l = k + 1; l < responseMultipleFile.length; l++) {
						try {
							assertEquals(responseMultipleFile[k].get(k).getBody().asString(), responseMultipleFile[l].get(k).getBody().asString());
						scenario.write(tempReqUrl[k] + " equals " + tempReqUrl[l]);
							printFullResponse();
						} catch (Exception e) {
							scenario.write(tempReqUrl[k] + " not equals " + tempReqUrl[l]);
						}
					}

				}

			}
		} catch (Exception e) {
			throw new GoException("Failed to invoke API-->" + "url", e);
		}
	}

	@After
	public void afterScenario() {
		jsonContentHeader = null;
		ReadExcelMultiple.requestUrls = null;
		listHeaders.clear();
		urlMultipleFile = null;
	}

}
