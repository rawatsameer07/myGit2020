package com.comparator.AppTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/APIComprator.feature",
		glue = "com.comparator.StepDefs",  
		tags = "@compare",
		plugin = { "pretty", "html:target/cucumber-reports", "json:target/reports/apiComparator.json" } 
		)
public class AppTestRunner {

}
