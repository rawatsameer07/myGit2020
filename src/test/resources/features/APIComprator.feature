Feature: To compare 2API responses(HTTP/HTTPS)

@compare
Scenario Outline: Compare response of requests from File1 and File2 
#	Given I set endpoint as "http://www.mocky.io/" with API "v2/5e0f6fe134000093002d8081"
#	And I invoke the GET API
#	Then I verify the status code to be "200"
#	Then I print response
	Then I read request urls from file "<FirstFile>,<SecondFile>"
#	
	Examples:
	|FirstFile|SecondFile|
	|dataTables/APIFile_B.xlsx|dataTables/APIFile_B.xlsx|
	