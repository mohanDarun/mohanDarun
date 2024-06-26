Feature: Explore APIs Functionality
  As a user
  I want to be able to explore APIs on the website
  So that I can learn more about the available services

  Scenario: Click on Explore APIs and Using our APIs Buttons
    Given I am on the developer website
    When I click on the "Explore APIs" button
    Then I should be redirected to the API guides page
    When I click on the "Onboarding" button
    Then I should be redirected to the onboarding overview section
    When I click on the "Using our APIs" button
    Then I should see the "Health checks" section
