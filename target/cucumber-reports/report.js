$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/APIComprator.feature");
formatter.feature({
  "line": 1,
  "name": "To compare 2API responses(HTTP/HTTPS)",
  "description": "",
  "id": "to-compare-2api-responses(http/https)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Compare response of requests from File1 and File2",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@compare"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I read request urls from file \"\u003cFirstFile\u003e,\u003cSecondFile\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I invoke request urls provided in file and validate the response",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2;",
  "rows": [
    {
      "cells": [
        "FirstFile",
        "SecondFile"
      ],
      "line": 10,
      "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2;;1"
    },
    {
      "cells": [
        "dataTables/TestData.xlsx",
        "dataTables/TestData2.xlsx"
      ],
      "line": 11,
      "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 109838077,
  "status": "passed"
});
formatter.before({
  "duration": 45753,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Compare response of requests from File1 and File2",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@compare"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I read request urls from file \"dataTables/TestData.xlsx,dataTables/TestData2.xlsx\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I invoke request urls provided in file and validate the response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dataTables/TestData.xlsx,dataTables/TestData2.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 421295062,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.write("http://www.mocky.io/v2/5e0f6fe134000093002d8081 equals http://www.mocky.io/v2/5e0f6fe134000093002d8081");
formatter.write("RESPONSE: {\n    \"resp\": \"API 1 response\"\n  }");
formatter.write("http://www.mocky.io/v2/5e11d1203100006900593f68 equals http://www.mocky.io/v2/5e11d1203100006900593f68");
formatter.write("RESPONSE: {\n\"id\": 110,    ‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬\n\"language\": \"Python\",\n\"price\": 1900,\n}");
formatter.write("http://www.mocky.io/v2/5e11d1643100002700593f6c equals http://www.mocky.io/v2/5e11d1523100006900593f6a");
formatter.write("RESPONSE: {\n   \"book\":[\n      {\n         \"id\":\"444\",\n         \"language\":\"C\",\n         \"edition\":\"First\",\n         \"author\":\"Dennis Ritchie \"\n      },\n      {\n         \"id\":\"555\",\n         \"language\":\"C++\",\n         \"edition\":\"second\",\n         \"author\":\" Bjarne Stroustrup \"\n      }\n   ]\n}  ");
formatter.write("http://www.mocky.io/v2/5e11d18b3100005900593f6d not equals http://www.mocky.io/v2/5e11d1523100006900593f6a");
formatter.result({
  "duration": 7618287955,
  "status": "passed"
});
formatter.after({
  "duration": 26303,
  "status": "passed"
});
});