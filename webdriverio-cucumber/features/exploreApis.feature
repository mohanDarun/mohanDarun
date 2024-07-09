Feature: Explore APIs on Developer Website

  # Scenario: Navigate to different sections and verify their presence
  #   Given I am on the developer website
  #   When I click on the "Explore APIs" button
  #   Then I should be redirected to the API guides page
  #   When I click on the "Onboarding" button
  #   Then I should be redirected to the onboarding overview section
  #   When I click on the "Using our APIs" button
  #   Then I should see the "Health checks" section
  #   When I click on the "Get a token" button
  #   Then I should see the "Request an access token" section

 

  Scenario: Verify Account Validation Guide Page
    Given I am on the account validation guide page
    When I click on the "Account Validation API" link
    Then I should see the text "Everyone needs validation"
    And I should see the "Good to know" text
    When I click on the "Account inquiry" link
    Then I should see the "Inquire about an account owner" text
