$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/fblogin.feature");
formatter.feature({
  "name": "To test the facebook application.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.step({
  "name": "To enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\".",
  "keyword": "When "
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "sakthi",
        "123"
      ]
    },
    {
      "cells": [
        "gerry",
        "456"
      ]
    },
    {
      "cells": [
        "geetha",
        "789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_enter_URL_and_navigate_to_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"sakthi\" and \"123\".",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_enter_URL_and_navigate_to_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"gerry\" and \"456\".",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the login funtionality of facebook application.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_enter_URL_and_navigate_to_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"geetha\" and \"789\".",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinition.LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});