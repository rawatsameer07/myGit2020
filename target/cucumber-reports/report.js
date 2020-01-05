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
      "cells": [
        "Files have same request urls",
        "dataTables/FileAB_identical.xlsx",
        "dataTables/FileAB_identical.xlsx"
      ],
      "line": 11,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;2"
    },
    {
      "cells": [
        "Files have different request urls but same response",
        "dataTables/FileAB_identical.xlsx",
        "dataTables/SamResponseAsFileAB_identical.xlsx"
      ],
      "line": 12,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;3"
    },
    {
      "cells": [
        "Files have different request urls different response",
        "dataTables/FileAB_identical.xlsx",
        "dataTables/DifferentResponse.xlsx"
      ],
      "line": 13,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;4"
    },
    {
      "cells": [
        "File request urls count are not same ex. File1 contains 5 urls and File2 contains 3urls",
        "dataTables/FileAB_identical.xlsx",
        "dataTables/ReqUrlCountMismatch.xlsx"
      ],
      "line": 14,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;5"
    },
    {
      "cells": [
        "No urls are present in both file",
        "dataTables/BlankFileB.xlsx",
        "dataTables/BlankFileB.xlsx"
      ],
      "line": 15,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;6"
    },
    {
      "cells": [
        "Url patter is not valid",
        "dataTables/InvalidUrlPattern.xlsx",
        "dataTables/InvalidUrlPattern.xlsx"
      ],
      "line": 16,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;7"
    },
    {
      "cells": [
        "File contains 1000 request urls",
        "dataTables/1000RequestFileA.xlsx",
        "dataTables/1000RequestFileB.xlsx"
      ],
      "line": 17,
      "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 112813,
  "status": "passed"
});
formatter.before({
  "duration": 26745,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Compare response when **Files have same request urls ** from files : File1 \u003d dataTables/FileAB_identical.xlsx and File2 \u003d  dataTables/FileAB_identical.xlsx",
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
  "name": "I read request urls from file \"dataTables/FileAB_identical.xlsx,dataTables/FileAB_identical.xlsx\"",
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
      "val": "dataTables/FileAB_identical.xlsx,dataTables/FileAB_identical.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 496051762,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.result({
  "duration": 2927493108,
  "status": "passed"
});
formatter.after({
  "duration": 16738,
  "status": "passed"
});
formatter.before({
  "duration": 14756,
  "status": "passed"
});
formatter.before({
  "duration": 12303,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Compare response when **Files have different request urls but same response ** from files : File1 \u003d dataTables/FileAB_identical.xlsx and File2 \u003d  dataTables/SamResponseAsFileAB_identical.xlsx",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;3",
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
  "name": "I read request urls from file \"dataTables/FileAB_identical.xlsx,dataTables/SamResponseAsFileAB_identical.xlsx\"",
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
      "val": "dataTables/FileAB_identical.xlsx,dataTables/SamResponseAsFileAB_identical.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 26928394,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11fe463100005a37593fbe");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.result({
  "duration": 741280344,
  "status": "passed"
});
formatter.after({
  "duration": 13918,
  "status": "passed"
});
formatter.before({
  "duration": 17294,
  "status": "passed"
});
formatter.before({
  "duration": 14899,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Compare response when **Files have different request urls different response ** from files : File1 \u003d dataTables/FileAB_identical.xlsx and File2 \u003d  dataTables/DifferentResponse.xlsx",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;4",
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
  "name": "I read request urls from file \"dataTables/FileAB_identical.xlsx,dataTables/DifferentResponse.xlsx\"",
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
      "val": "dataTables/FileAB_identical.xlsx,dataTables/DifferentResponse.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 29539712,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.result({
  "duration": 701408232,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c{\n  \"[visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210]\n}\u003e but was:\u003c{\n  \"[error\" : \"Unauthorized true\"]\n}\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.comparator.StepDefs.StepDefCore.invokeRequestUrlsMultipleFiles(StepDefCore.java:105)\n\tat ✽.Then I invoke request urls provided in file and validate the response(src/test/resources/features/APIComprator.feature:6)\n",
  "status": "failed"
});
formatter.after({
  "duration": 13995,
  "status": "passed"
});
formatter.before({
  "duration": 23566,
  "status": "passed"
});
formatter.before({
  "duration": 19269,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Compare response when **File request urls count are not same ex. File1 contains 5 urls and File2 contains 3urls ** from files : File1 \u003d dataTables/FileAB_identical.xlsx and File2 \u003d  dataTables/ReqUrlCountMismatch.xlsx",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;5",
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
  "name": "I read request urls from file \"dataTables/FileAB_identical.xlsx,dataTables/ReqUrlCountMismatch.xlsx\"",
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
      "val": "dataTables/FileAB_identical.xlsx,dataTables/ReqUrlCountMismatch.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 20839575,
  "status": "passed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 equals http://www.mocky.io/v2/5e11f6e83100003700593fb2");
formatter.write("RESPONSE: {\n  \"visibility\" : true,\n  \"popularity\" : \"immense\",\n  \"id\" : 210\n}");
formatter.write("Column Number: 2 Request url not found");
formatter.write("http://www.mocky.io/v2/5e11f6e83100003700593fb2 not equals http://www.mocky.io/v2/5e11fedb3100002700593fc2");
formatter.result({
  "duration": 1060252040,
  "status": "passed"
});
formatter.after({
  "duration": 11908,
  "status": "passed"
});
formatter.before({
  "duration": 14282,
  "status": "passed"
});
formatter.before({
  "duration": 12457,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Compare response when **No urls are present in both file ** from files : File1 \u003d dataTables/BlankFileB.xlsx and File2 \u003d  dataTables/BlankFileB.xlsx",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;6",
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
  "name": "I read request urls from file \"dataTables/BlankFileB.xlsx,dataTables/BlankFileB.xlsx\"",
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
      "val": "dataTables/BlankFileB.xlsx,dataTables/BlankFileB.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 8792512,
  "error_message": "java.lang.AssertionError: URL not found\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat com.comparator.BusinessComponent.ReadExcelMultiple.readContentByFromFile(ReadExcelMultiple.java:69)\n\tat com.comparator.StepDefs.StepDefJson.readRequestUrl(StepDefJson.java:39)\n\tat ✽.Given I read request urls from file \"dataTables/BlankFileB.xlsx,dataTables/BlankFileB.xlsx\"(src/test/resources/features/APIComprator.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21551,
  "status": "passed"
});
formatter.before({
  "duration": 12778,
  "status": "passed"
});
formatter.before({
  "duration": 19164,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Compare response when **Url patter is not valid ** from files : File1 \u003d dataTables/InvalidUrlPattern.xlsx and File2 \u003d  dataTables/InvalidUrlPattern.xlsx",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;7",
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
  "name": "I read request urls from file \"dataTables/InvalidUrlPattern.xlsx,dataTables/InvalidUrlPattern.xlsx\"",
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
      "val": "dataTables/InvalidUrlPattern.xlsx,dataTables/InvalidUrlPattern.xlsx",
      "offset": 31
    }
  ],
  "location": "StepDefJson.readRequestUrl(String)"
});
formatter.result({
  "duration": 12496873,
  "error_message": "java.lang.AssertionError: URL not found\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat com.comparator.BusinessComponent.ReadExcelMultiple.readContentByFromFile(ReadExcelMultiple.java:69)\n\tat com.comparator.StepDefs.StepDefJson.readRequestUrl(StepDefJson.java:39)\n\tat ✽.Given I read request urls from file \"dataTables/InvalidUrlPattern.xlsx,dataTables/InvalidUrlPattern.xlsx\"(src/test/resources/features/APIComprator.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefCore.invokeRequestUrlsMultipleFiles()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9222,
  "status": "passed"
});
formatter.before({
  "duration": 16446,
  "status": "passed"
});
formatter.before({
  "duration": 9898,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Compare response when **File contains 1000 request urls ** from files : File1 \u003d dataTables/1000RequestFileA.xlsx and File2 \u003d  dataTables/1000RequestFileB.xlsx",
  "description": "",
  "id": "to-compare-2api-responses(http/https);compare-response-when-**\u003cscenario\u003e-**-from-files-:-file1-\u003d-\u003cfirstfile\u003e-and-file2-\u003d--\u003csecondfile\u003e;;8",
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
  "duration": 87109231,
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
