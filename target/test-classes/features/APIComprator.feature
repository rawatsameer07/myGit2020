Feature: To compare 2API responses(HTTP/HTTPS)

@compare
Scenario Outline: Compare response of requests from files <FirstFile> and <SecondFile> 
	Given I read request urls from file "<FirstFile>,<SecondFile>"
	Then I invoke request urls provided in file and validate the response
	
	
	Examples:
	|FirstFile|SecondFile|
	|dataTables/TestData.xlsx|dataTables/TestData2.xlsx|
	