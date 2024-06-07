const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

 



Given('I navigate to the developer key website', async () => {
    await browser.url('https://developer.key.com');
});

When('I click on the specific element', async () => {
    const element = await $('/html/body/div/main/div/div/div[2]/div/div[2]/div/div[1]/div[1]/div/div/div');
    
    // Wait for the element to be present and clickable
    await element.waitForExist({ timeout: 20000 });
    await element.waitForClickable({ timeout: 20000 });

    await element.click();
});

Then('I should see the new page title in the console', async () => {
    // Wait for the new page to load (adjust timeout as needed)
    await browser.pause(5000);

    const title = await browser.getTitle();
    console.log(`The title of the new page is: ${title}`);
});
Then('I click on the next specific element', async () => {
    // Using a CSS selector based on class and title attributes
    const nextElementSelector = 'a.nav-link--guides-getting-startedonboarding-overview[title="High-level overview of how to onboard and become an API consumer. "]';
    const nextElement = await $(nextElementSelector);

    // Wait for the next element to be present and clickable
    await nextElement.waitForExist({ timeout: 20000 });
    await nextElement.waitForClickable({ timeout: 20000 });

    await nextElement.click();

    // Wait for the scroll action to complete
    await browser.pause(2000);

    // Verify the target section contains the expected text
    const targetSection = await $('#onboarding-overview'); // Use the ID selector to locate the target section
    await targetSection.waitForExist({ timeout: 20000 }); // Wait for the section to be loaded and present

    const sectionText = await targetSection.getText();
    expect(sectionText).to.include('Quick overview of the onboarding process');

    console.log('Navigated to the target section successfully.');
});