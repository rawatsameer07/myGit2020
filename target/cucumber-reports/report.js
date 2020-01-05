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
  "name": "Compare response when **\u003cScenario\u003e ** from files : File1 \u003d \u003cFirstFile\u003e and File2 \u003d  \u003cSecondFile\u003e",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e",
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
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;",
  "rows": [
    {
      "cells": [
        "Scenario",
        "FirstFile",
        "SecondFile"
      ],
      "line": 10,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;1"
    },
    {
      "comments": [
        {
          "line": 11,
          "value": "#\t|Files have same request urls|dataTables/FileAB_identical.xlsx|dataTables/FileAB_identical.xlsx|"
        },
        {
          "line": 12,
          "value": "#\t|Files have different request urls but same response|dataTables/FileAB_identical.xlsx|dataTables/SamResponseAsFileAB_identical.xlsx|"
        },
        {
          "line": 13,
          "value": "#\t|Files have different request urls different response|dataTables/FileAB_identical.xlsx|dataTables/DifferentResponse.xlsx|"
        },
        {
          "line": 14,
          "value": "#\t|File request urls count are not same ex. File1 contains 5 urls and File2 contains 3urls|dataTables/FileAB_identical.xlsx|dataTables/ReqUrlCountMismatch.xlsx|"
        },
        {
          "line": 15,
          "value": "#\t|No urls are present in both file|dataTables/BlankFileB.xlsx|dataTables/BlankFileB.xlsx|"
        },
        {
          "line": 16,
          "value": "#\t|Url patter is not valid|dataTables/InvalidUrlPattern.xlsx|dataTables/InvalidUrlPattern.xlsx|"
        }
      ],
      "cells": [
        "File contains 1000 request urls",
        "dataTables/1000RequestFileA.xlsx",
        "dataTables/1000RequestFileB.xlsx"
      ],
      "line": 17,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 82055,
  "status": "passed"
});
formatter.before({
  "duration": 34103,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#\t|Files have same request urls|dataTables/FileAB_identical.xlsx|dataTables/FileAB_identical.xlsx|"
    },
    {
      "line": 12,
      "value": "#\t|Files have different request urls but same response|dataTables/FileAB_identical.xlsx|dataTables/SamResponseAsFileAB_identical.xlsx|"
    },
    {
      "line": 13,
      "value": "#\t|Files have different request urls different response|dataTables/FileAB_identical.xlsx|dataTables/DifferentResponse.xlsx|"
    },
    {
      "line": 14,
      "value": "#\t|File request urls count are not same ex. File1 contains 5 urls and File2 contains 3urls|dataTables/FileAB_identical.xlsx|dataTables/ReqUrlCountMismatch.xlsx|"
    },
    {
      "line": 15,
      "value": "#\t|No urls are present in both file|dataTables/BlankFileB.xlsx|dataTables/BlankFileB.xlsx|"
    },
    {
      "line": 16,
      "value": "#\t|Url patter is not valid|dataTables/InvalidUrlPattern.xlsx|dataTables/InvalidUrlPattern.xlsx|"
    }
  ],
  "line": 17,
  "name": "Compare response when **File contains 1000 request urls ** from files : File1 \u003d dataTables/1000RequestFileA.xlsx and File2 \u003d  dataTables/1000RequestFileB.xlsx",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;2",
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
  "name": "I read request urls from file \"dataTables/1000RequestFileA.xlsx,dataTables/1000RequestFileB.xlsx\"",
  "matchedColumns": [
    1,
    2
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
      "val": "dataTables/1000RequestFileA.xlsx,dataTables/1000RequestFileB.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 468240609,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe463100005a37593fbe equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe74310000c74a593fbf equals http://www.mocky.io/v2/5e11fe74310000c74a593fbf");
formatter.write("RESPONSE: {\n  \"visibility\" : true\n}");
formatter.write("http://www.mocky.io/v2/5e11fedb3100002700593fc2 equals http://www.mocky.io/v2/5e11fedb3100002700593fc2");
formatter.write("RESPONSE: {\n  \"error\" : \"Unauthorized true\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff09310000c956593fc3 equals http://www.mocky.io/v2/5e11ff09310000c956593fc3");
formatter.write("RESPONSE: {\n  \"error\" : \"Internal server error\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff36310000cc4d593fc6 equals http://www.mocky.io/v2/5e11ff36310000cc4d593fc6");
formatter.write("RESPONSE: {\n  \"error\" : \"No response\"\n}");
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe463100005a37593fbe equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe74310000c74a593fbf equals http://www.mocky.io/v2/5e11fe74310000c74a593fbf");
formatter.write("RESPONSE: {\n  \"visibility\" : true\n}");
formatter.write("http://www.mocky.io/v2/5e11fedb3100002700593fc2 equals http://www.mocky.io/v2/5e11fedb3100002700593fc2");
formatter.write("RESPONSE: {\n  \"error\" : \"Unauthorized true\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff09310000c956593fc3 equals http://www.mocky.io/v2/5e11ff09310000c956593fc3");
formatter.write("RESPONSE: {\n  \"error\" : \"Internal server error\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff36310000cc4d593fc6 equals http://www.mocky.io/v2/5e11ff36310000cc4d593fc6");
formatter.write("RESPONSE: {\n  \"error\" : \"No response\"\n}");
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe463100005a37593fbe equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe74310000c74a593fbf equals http://www.mocky.io/v2/5e11fe74310000c74a593fbf");
formatter.write("RESPONSE: {\n  \"visibility\" : true\n}");
formatter.write("http://www.mocky.io/v2/5e11fedb3100002700593fc2 equals http://www.mocky.io/v2/5e11fedb3100002700593fc2");
formatter.write("RESPONSE: {\n  \"error\" : \"Unauthorized true\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff09310000c956593fc3 equals http://www.mocky.io/v2/5e11ff09310000c956593fc3");
formatter.write("RESPONSE: {\n  \"error\" : \"Internal server error\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff36310000cc4d593fc6 equals http://www.mocky.io/v2/5e11ff36310000cc4d593fc6");
formatter.write("RESPONSE: {\n  \"error\" : \"No response\"\n}");
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe463100005a37593fbe equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe74310000c74a593fbf equals http://www.mocky.io/v2/5e11fe74310000c74a593fbf");
formatter.write("RESPONSE: {\n  \"visibility\" : true\n}");
formatter.write("http://www.mocky.io/v2/5e11fedb3100002700593fc2 equals http://www.mocky.io/v2/5e11fedb3100002700593fc2");
formatter.write("RESPONSE: {\n  \"error\" : \"Unauthorized true\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff09310000c956593fc3 equals http://www.mocky.io/v2/5e11ff09310000c956593fc3");
formatter.write("RESPONSE: {\n  \"error\" : \"Internal server error\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff36310000cc4d593fc6 equals http://www.mocky.io/v2/5e11ff36310000cc4d593fc6");
formatter.write("RESPONSE: {\n  \"error\" : \"No response\"\n}");
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe463100005a37593fbe equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe74310000c74a593fbf equals http://www.mocky.io/v2/5e11fe74310000c74a593fbf");
formatter.write("RESPONSE: {\n  \"visibility\" : true\n}");
formatter.write("http://www.mocky.io/v2/5e11fedb3100002700593fc2 equals http://www.mocky.io/v2/5e11fedb3100002700593fc2");
formatter.write("RESPONSE: {\n  \"error\" : \"Unauthorized true\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff09310000c956593fc3 equals http://www.mocky.io/v2/5e11ff09310000c956593fc3");
formatter.write("RESPONSE: {\n  \"error\" : \"Internal server error\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff36310000cc4d593fc6 equals http://www.mocky.io/v2/5e11ff36310000cc4d593fc6");
formatter.write("RESPONSE: {\n  \"error\" : \"No response\"\n}");
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe463100005a37593fbe equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe74310000c74a593fbf equals http://www.mocky.io/v2/5e11fe74310000c74a593fbf");
formatter.write("RESPONSE: {\n  \"visibility\" : true\n}");
formatter.write("http://www.mocky.io/v2/5e11fedb3100002700593fc2 equals http://www.mocky.io/v2/5e11fedb3100002700593fc2");
formatter.write("RESPONSE: {\n  \"error\" : \"Unauthorized true\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff09310000c956593fc3 equals http://www.mocky.io/v2/5e11ff09310000c956593fc3");
formatter.write("RESPONSE: {\n  \"error\" : \"Internal server error\"\n}");
formatter.write("http://www.mocky.io/v2/5e11ff36310000cc4d593fc6 equals http://www.mocky.io/v2/5e11ff36310000cc4d593fc6");
formatter.write("RESPONSE: {\n  \"error\" : \"No response\"\n}");
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe463100005a37593fbe equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("http://www.mocky.io/v2/5e11fe74310000c74a593fbf equals http://www.mocky.io/v2/5e11fe74310000c74a593fbf");
formatter.write("RESPONSE: {\n  \"visibility\" : true\n}");
formatter.result({
  "duration": 30190986792,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c{\n  \"[error\" : \"Unauthorized true\"]\n}\u003e but was:\u003c{\n  \"[visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210]\n}\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.comparator.StepDefs.StepDefCore.invokeRequestUrlsMultipleFiles(StepDefCore.java:106)\n\tat ✽.Then I invoke request urls provided in file and validate the response(src/test/resources/features/APIComprator.feature:6)\n",
  "status": "failed"
});
formatter.after({
  "duration": 35028,
  "status": "passed"
});
});