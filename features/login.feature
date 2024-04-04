@Functionality
Feature: LamdaTest Login Functionality

  Background: 
    Given User has opened LamdaTest on the browser 
    

  @TCID001
  Scenario Outline: Verify valid Swag Labs login
    When User enter valid <username> and <password> 
    And User click the login button on valid case 
    Then Showing  title at the top of the page 

    Examples: 
      | username      | password     |
      | testuser123@gmail.com | Playwright@123 |

      @TCID002
  Scenario Outline: Verify invalid Swag Labs login
    When User enter invalid <username> and <password> 
    And User click the login button on invalid case 
    Then Showing Epic sadface: Sorry, this user has been locked out 

    Examples: 
      | username        | password     |
      | locked_out_user | secret_sauce |