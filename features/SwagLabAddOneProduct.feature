@Functionality
Feature: Swag Labs Add One Product Functionality

  Background: 
    Given User has opened Swag Labs on the browser 
    Given User has navigated to Swag Labs URL 

  @TCID001
  Scenario Outline: Add one product to cart page
    When User enter valid <username> and <password> 
    And User click the login button on valid case 
    Then Showing Swag Labs title at the top of the page 
    When User adds an item to the cart
    And User clicks the Add to Cart button on the inventory page
    Then User should see the added product in the cart page with the corresponding details 
   

   Examples: 
      | username      | password     |
      | testuser123@gmail.com | Playwright@123 |
