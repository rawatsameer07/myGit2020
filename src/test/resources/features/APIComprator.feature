Feature: To compare 2API responses(HTTP/HTTPS)

@compare
Scenario Outline: Compare response when **<Scenario> ** from files : File1 = <FirstFile> and File2 =  <SecondFile> 
	Given I read request urls from file "<FirstFile>,<SecondFile>"
	Then I invoke request urls provided in file and validate the response
	
	
	Examples:
	|Scenario|FirstFile|SecondFile|
	|Files have same request urls|dataTables/FileAB_identical.xlsx|dataTables/FileAB_identical.xlsx|
	|Files have different request urls but same response|dataTables/FileAB_identical.xlsx|dataTables/SamResponseAsFileAB_identical.xlsx|
	|Files have different request urls different response|dataTables/FileAB_identical.xlsx|dataTables/DifferentResponse.xlsx|
	|File request urls count are not same ex. File1 contains 5 urls and File2 contains 3urls|dataTables/FileAB_identical.xlsx|dataTables/ReqUrlCountMismatch.xlsx|
	|No urls are present in both file|dataTables/BlankFileB.xlsx|dataTables/BlankFileB.xlsx|
	|Url patter is not valid|dataTables/InvalidUrlPattern.xlsx|dataTables/InvalidUrlPattern.xlsx|
	|File contains 1000 request urls|dataTables/1000RequestFileA.xlsx|dataTables/1000RequestFileB.xlsx|
	