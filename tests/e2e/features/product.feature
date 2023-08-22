Feature: Product inventory

  Background:
    Given I can access "https://dashboard.nexudus.com/"
    When I type "adrian+1004930927@nexudus.com" as email
    And I type "6-JhE8*aoT7O2d" as password
    And I click the login button
    Then I confirm login succeeds and i am presented with the dashboard home page

  @product
  Scenario: Add and delete a product from the products list
    When I navigate to "https://dashboard.nexudus.com/billing/products"
    And I click on the Add Product button
    Then I fill the name, description and price fields
    And I click on Save Changes
    When I search by the product name to ensure the newly created product is the first result on the list
    Then I select the first item in the list
    And I click on Delete record
    And I confirm the modal dialog clicking on "Yes, do it"
    Then I confirm the product is no longer available
