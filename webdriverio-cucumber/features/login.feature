Feature: Explore APIs on Developer Website

  Scenario: Navigate to different sections and verify their presence
    Given I am on the developer website
    When I click on the "Explore APIs" button
    Then I should be redirected to the API guides page
    When I click on the "Onboarding" button
    Then I should be redirected to the onboarding overview section
    When I click on the "Using our APIs" button
    Then I should see the "Health checks" section
    When I click on the "Get a token" button
    Then I should see the "Request an access token" section
