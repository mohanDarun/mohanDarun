Feature: Navigation and clicking element

  Scenario: Navigate to URL, click element, and log title
    Given I navigate to the developer key website
    When I click on the specific element
    Then I should see the new page title in the console
    And I click on the next specific element
