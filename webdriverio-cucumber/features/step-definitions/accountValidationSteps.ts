import { Given, When, Then } from '@cucumber/cucumber';
import AccountValidationPage from '../pageobjects/AccountValidationPage';
import assert from 'assert';

Given('I am on the account validation guide page', async () => {
  AccountValidationPage.open();
  await browser.pause(2000); // Add a pause of 2 seconds (2000 milliseconds)
});

When('I click on the "Account Validation API" link', async () => {
  await AccountValidationPage.clickAccountValidationAPI();
  await browser.pause(2000); // Add a pause of 2 seconds (2000 milliseconds) to observe the click action
});

When('I click on the "Account inquiry" link', async () => {
  await AccountValidationPage.clickAccountInquiry();
  await browser.pause(2000); // Add a pause of 2 seconds (2000 milliseconds) to observe the click action
});

Then('I should see the text {string}', async (expectedText: string) => {
  const actualText = await AccountValidationPage.getValidationHeaderText();
  console.log('Actual Text:', actualText); // Print the actual text retrieved from the page
  assert.strictEqual(actualText.trim(), expectedText);
});

Then('I should see the "Good to know" text', async () => {
  const goodToKnowText = await AccountValidationPage.getGoodToKnowText();
  console.log('Good to Know Text:', goodToKnowText); // Print the "Good to Know" text retrieved from the page
  assert.strictEqual(goodToKnowText.trim(), 'Good to know');
});

Then('I should see the "Inquire about an account owner" text', async () => {
  const accountInquiryText = await AccountValidationPage.getAccountInquiryHeaderText();
  console.log('Account Inquiry Text:', accountInquiryText); // Print the "Inquire about an account owner" text retrieved from the page
  assert.strictEqual(accountInquiryText.trim(), 'Inquire about an account owner');
});
