$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Consumer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#  @tag2"
    },
    {
      "line": 21,
      "value": "#  Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 22,
      "value": "#    Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 23,
      "value": "#    When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 24,
      "value": "#    Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 26,
      "value": "#   Examples:"
    },
    {
      "line": 27,
      "value": "#     | name  | value | status  |"
    },
    {
      "line": 28,
      "value": "#     | name1 |     5 | success |"
    },
    {
      "line": 29,
      "value": "#     | name2 |     7 | Fail    |"
    }
  ],
  "line": 31,
  "name": "Login into consumer account",
  "description": "Existing consumer should be able to login into account using correct credentials",
  "id": "login-into-consumer-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 30,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 8090490803,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Submit a service request",
  "description": "",
  "id": "login-into-consumer-account;submit-a-service-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Consumer login to Kaodim webiste with email \"shikha@kaodim.com\" and password \"12345\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Consumer search for service using serviceType \"kriti direct floor markdown\" and ServiceArea \"sentul west\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Consumer click next",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Consumer select date",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Consumer click next",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Consumer enters numericValue \"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Consumer click next",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Consumer enters Text \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Consumer click next",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Consumer click on SubmitRequest",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Consumer should see message \"Thanks for submitting your request. Our service provider(s) will reach out to you shortly\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Consumer should be able to successful Login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "shikha@kaodim.com",
      "offset": 45
    },
    {
      "val": "12345",
      "offset": 78
    }
  ],
  "location": "Consumer.consumer_login_to_Kaodim_webiste_with_email_and_password(String,String)"
});
formatter.result({
  "duration": 28409680433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kriti direct floor markdown",
      "offset": 47
    },
    {
      "val": "sentul west",
      "offset": 93
    }
  ],
  "location": "Consumer.consumer_search_for_service_using_serviceType_and_ServiceArea(String,String)"
});
formatter.result({
  "duration": 1165320677,
  "status": "passed"
});
formatter.match({
  "location": "Consumer.consumer_click_next()"
});
formatter.result({
  "duration": 80213,
  "status": "passed"
});
formatter.match({
  "location": "Consumer.consumer_select_date()"
});
formatter.result({
  "duration": 43236,
  "status": "passed"
});
formatter.match({
  "location": "Consumer.consumer_click_next()"
});
formatter.result({
  "duration": 42098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "Consumer.consumer_enters_numericValue(String)"
});
formatter.result({
  "duration": 143929,
  "status": "passed"
});
formatter.match({
  "location": "Consumer.consumer_click_next()"
});
formatter.result({
  "duration": 63147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 22
    }
  ],
  "location": "Consumer.consumer_enters_Text(String)"
});
formatter.result({
  "duration": 83058,
  "status": "passed"
});
formatter.match({
  "location": "Consumer.consumer_click_next()"
});
formatter.result({
  "duration": 73386,
  "status": "passed"
});
formatter.match({
  "location": "Consumer.consumer_click_on_SubmitRequest()"
});
formatter.result({
  "duration": 46649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanks for submitting your request. Our service provider(s) will reach out to you shortly",
      "offset": 29
    }
  ],
  "location": "Consumer.consumer_should_see_message(String)"
});
formatter.result({
  "duration": 123449,
  "status": "passed"
});
formatter.match({
  "location": "Consumer.consumer_should_be_able_to_successful_Login()"
});
formatter.result({
  "duration": 50063,
  "status": "passed"
});
formatter.after({
  "duration": 4362512189,
  "status": "passed"
});
});