package com.comparator.StepDefs;

import static org.junit.Assert.assertNotNull;

import com.comparator.BusinessComponent.GoException;
import com.comparator.BusinessComponent.JsonUtils;
import com.comparator.BusinessComponent.ReadExcelMultiple;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;

public class StepDefJson {
	private Scenario scenario;

	@Before
	public void before(Scenario scenario) {
		this.scenario = scenario;
	}

	@Then("^I print \"([^\"]*)\"$")
	public void printValueFromResponse(String value) throws GoException {
		try {
			String objResult = JsonUtils.readValueFromJSON(StepDefCore.resJsonContext, value.split("-->")[0]);
			if (objResult == null) {
				scenario.write("JsonPath " + value + " not found");
			} else {
				scenario.write(value + " = " + objResult);
			}
		} catch (Exception e) {
			throw new GoException("Failed to print value from response--> " + value, e);
		}

	}

	@Then("^I read request urls from file \"([^\"]*)\"$")
	public void readRequestUrl(String value) throws GoException {
		try {
			ReadExcelMultiple.readContentByFromFile(value);
		} catch (Exception e) {
			scenario.write("Failed to read request urls from file or no url present");
			throw new GoException("Failed to read request urls from file--> " + value, e);
		}

	}

}
