#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

#  @tag2
#  Scenario Outline: Title of your scenario outline
#    Given I want to write a step with <name>
#    When I check for the <value> in step
#    Then I verify the <status> in step

 #   Examples: 
 #     | name  | value | status  |
 #     | name1 |     5 | success |
 #     | name2 |     7 | Fail    |
@tag
Feature: Login into consumer account
  Existing consumer should be able to login into account using correct credentials

  @tag1
  Scenario: Submit a service request
    Given Consumer login to Kaodim webiste with email "shikha@kaodim.com" and password "12345"
    When Consumer search for service using serviceType "kriti direct floor markdown" and ServiceArea "sentul west"
    And Consumer click next
    And Consumer select date
    And Consumer click next
    And Consumer enters numericValue "5"
    And Consumer click next
    And Consumer enters Text "Testing"
    And Consumer click next
    And Consumer click on SubmitRequest
    Then Consumer should see message "Thanks for submitting your request. Our service provider(s) will reach out to you shortly"
    
    Then Consumer should be able to successful Login
