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
  "comments": [
    {
      "line": 5,
      "value": "#\tGiven I set endpoint as \"http://www.mocky.io/\" with API \"v2/5e0f6fe134000093002d8081\""
    },
    {
      "line": 6,
      "value": "#\tAnd I invoke the GET API"
    },
    {
      "line": 7,
      "value": "#\tThen I verify the status code to be \"200\""
    },
    {
      "line": 8,
      "value": "#\tThen I print response"
    }
  ],
  "line": 9,
  "name": "I read request urls from file \"\u003cFirstFile\u003e,\u003cSecondFile\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#"
    }
  ],
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2;",
  "rows": [
    {
      "cells": [
        "FirstFile",
        "SecondFile"
      ],
      "line": 12,
      "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2;;1"
    },
    {
      "cells": [
        "dataTables/APIFile_B.xlsx",
        "dataTables/APIFile_B.xlsx"
      ],
      "line": 13,
      "id": "to-compare-2api-responses(http/https);compare-response-of-requests-from-file1-and-file2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 59282,
  "status": "passed"
});
formatter.before({
  "duration": 96756726,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
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
  "comments": [
    {
      "line": 5,
      "value": "#\tGiven I set endpoint as \"http://www.mocky.io/\" with API \"v2/5e0f6fe134000093002d8081\""
    },
    {
      "line": 6,
      "value": "#\tAnd I invoke the GET API"
    },
    {
      "line": 7,
      "value": "#\tThen I verify the status code to be \"200\""
    },
    {
      "line": 8,
      "value": "#\tThen I print response"
    }
  ],
  "line": 9,
  "name": "I read request urls from file \"dataTables/APIFile_B.xlsx,dataTables/APIFile_B.xlsx\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dataTables/APIFile_B.xlsx,dataTables/APIFile_B.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 466688471,
  "status": "passed"
});
});