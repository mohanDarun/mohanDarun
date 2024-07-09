class AccountValidationPage {
  get accountValidationAPILink() {
    return $('a[href="/guides/account-validation#onboarding-overview"]');
  }

  get validationText() {
    return $('h2#onboarding-overview');
  }

  async getGoodToKnowTextElement() {
    const elements = await $$('div.block--type-notification-block h2');
    for (const element of elements) {
      if ((await element.getText()) === 'Good to know') {
        return element;
      }
    }
    throw new Error('Good to know text not found');
  }

  get accountInquiryLink() {
    return $('a[href="/guides/account-validation#send-inquiry"]');
  }

  get accountInquiryHeader() {
    return $('h2#send-inquiry');
  }

  open() {
    browser.url('https://developer.key.com/guides/account-validation');
  }

  async clickAccountValidationAPI() {
    await this.accountValidationAPILink.click();
  }

  async clickAccountInquiry() {
    await this.accountInquiryLink.click();
  }

  async getValidationHeaderText() {
    return this.validationText.getText();
  }

  async getGoodToKnowText() {
    const element = await this.getGoodToKnowTextElement();
    return element.getText();
  }

  async getAccountInquiryHeaderText() {
    return this.accountInquiryHeader.getText();
  }
}

export default new AccountValidationPage();
