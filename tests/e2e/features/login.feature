Feature: Login as a user

  Background:
    Given I can access "https://dashboard.nexudus.com/"
    Then I confirm the login page is presented

  @login
  Scenario: log-in page shows a clear error message when invalid details are provided
    When I type "bad@example.com" as email
    And I type "badpassword" as password
    And I click the login button
    Then I confirm a clear error message is presented on screen

  @login
  Scenario Outline: log-in page logs user in when valid details are provided
    When I type "<email>" as email
    And I type "<password>" as password
    And I click the login button
    Then I confirm login succeeds and i am presented with the dashboard home page
    Examples:
      |email                          | password       |
      | adrian+1004930927@nexudus.com | 6-JhE8*aoT7O2d |
