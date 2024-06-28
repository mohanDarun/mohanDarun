import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals';
import DeveloperPage from '../pageobjects/DeveloperPage';

// Step: Given I am on the developer website
Given('I am on the developer website', async () => {
  await DeveloperPage.open();
});

// Step: When I click on the "Explore APIs" button
When('I click on the "Explore APIs" button', async () => {
  // Add a pause of 2 seconds (2000 milliseconds)
  await browser.pause(2000);
  // Implement code to click the "Explore APIs" button
  await DeveloperPage.clickExploreAPIs();
});

// Step: Then I should be redirected to the API guides page
Then('I should be redirected to the API guides page', async () => {
  // Add a pause of 2 seconds (2000 milliseconds) to see the redirection
  await browser.pause(2000);
  // Implement code to assert redirection to the API guides page
  await expect(browser).toHaveUrlContaining('/guides/getting-started');
});

// Step: When I click on the "Onboarding" button
When('I click on the "Onboarding" button', async () => {
  // Add a pause of 2 seconds (2000 milliseconds)
  await browser.pause(2000);
  // Implement code to click the "Onboarding" button
  await DeveloperPage.clickOnboarding();
});

// Step: Then I should be redirected to the onboarding overview section
Then('I should be redirected to the onboarding overview section', async () => {
  // Add a pause of 2 seconds (2000 milliseconds) to see the redirection
  await browser.pause(2000);
  // Implement code to assert the presence of the onboarding overview section
  const isPresent = await DeveloperPage.isOnboardingSectionPresent();
  const isDisplayed = await DeveloperPage.isOnboardingSectionDisplayed();

  console.log("Is 'Onboarding' section present:", isPresent);
  console.log("Is 'Onboarding' section displayed:", isDisplayed);

  await expect(isPresent).toBe(true);
  await expect(isDisplayed).toBe(true);
});

// Step: When I click on the "Using our APIs" button
When('I click on the "Using our APIs" button', async () => {
  // Add a pause of 2 seconds (2000 milliseconds)
  await browser.pause(2000);
  // Implement code to click the "Using our APIs" button
  await DeveloperPage.clickUsingOurAPIs();
});

// Step: Then I should see the "Health checks" section
Then('I should see the "Health checks" section', async () => {
  // Add a pause of 2 seconds (2000 milliseconds) to see the redirection
  await browser.pause(2000);
  // Implement code to assert the presence of the "Health checks" section
  const healthChecks = DeveloperPage.healthChecksSection;
  await expect(healthChecks).toBePresent();
  await expect(healthChecks).toBeDisplayed();

  // Print the text content of the "Health checks" section
  const healthChecksText = await DeveloperPage.getHealthChecksText();
  console.log("Text content of the 'Health checks' section:", healthChecksText);
});

// Step: When I click on the "Get a token" button
When('I click on the "Get a token" button', async () => {
  // Add a pause of 2 seconds (2000 milliseconds)
  await browser.pause(2000);
  // Implement code to click the "Get a token" button
  await DeveloperPage.clickGetToken();
});

// Step: Then I should see the "Request an access token" section
Then('I should see the "Request an access token" section', async () => {
  // Add a pause of 2 seconds (2000 milliseconds) to see the redirection
  await browser.pause(2000);
  // Implement code to assert the presence of the "Request an access token" section
  const accessTokenSection = DeveloperPage.accessTokenSection;
  await expect(accessTokenSection).toBePresent();
  await expect(accessTokenSection).toBeDisplayed();

  // Print the text content of the "Request an access token" section
  const accessTokenText = await DeveloperPage.getAccessTokenText();
  console.log("Text content of the 'Request an access token' section:", accessTokenText);
});
