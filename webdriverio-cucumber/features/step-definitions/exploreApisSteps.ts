import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals';

// Step: Given I am on the developer website
Given('I am on the developer website', async () => {
  await browser.url('https://developer.key.com/');
});

// Step: When I click on the "Explore APIs" button
When('I click on the "Explore APIs" button', async () => {
  // Add a pause of 2 seconds (2000 milliseconds)
  await browser.pause(2000);
  // Implement code to click the "Explore APIs" button
  await (await $('.bank-explore a')).click();
});

// Step: Then I should be redirected to the API guides page
Then('I should be redirected to the API guides page', async () => {
  // Add a pause of 2 seconds (2000 milliseconds) to see the redirection
  await browser.pause(2000);
  // Implement code to assert redirection to the API guides page
  await expect(browser).toHaveUrlContaining('/guides/getting-started');
});

// Step: When I click on the "Using our APIs" button
When('I click on the "Using our APIs" button', async () => {
  // Add a pause of 2 seconds (2000 milliseconds)
  await browser.pause(2000);
  // Implement code to click the "Using our APIs" button
  await (await $('a.nav-link--guides-getting-starteduse-our-apis')).click();
});

// Step: Then I should see the "Health checks" section
Then('I should see the "Health checks" section', async () => {
  // Add a pause of 2 seconds (2000 milliseconds) to see the redirection
  await browser.pause(2000);
  // Implement code to assert the presence of the "Health checks" section
  const healthChecks = await $('#Health-checks');
  await expect(healthChecks).toBePresent();
  await expect(healthChecks).toBeDisplayed();

  // Print the text content of the "Health checks" section
  const healthChecksText = await healthChecks.getText();
  console.log("Text content of the 'Health checks' section:", healthChecksText);
});
