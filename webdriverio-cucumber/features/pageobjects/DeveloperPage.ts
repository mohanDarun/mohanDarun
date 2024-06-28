class DeveloperPage {
  get exploreAPIsButton() {
    return $('.bank-explore a');
  }

  get onboardingButton() {
    return $('a.nav-link--guides-getting-startedonboarding-overview');
  }

  get usingOurAPIsButton() {
    return $('a.nav-link--guides-getting-starteduse-our-apis');
  }

  get getTokenButton() {
    return $('a.nav-link--guides-getting-startedget-access-token');
  }

  get onboardingOverviewSection() {
    return $('div[data-analytics-dp="Quick overview of the onboarding process."]');
  }

  get healthChecksSection() {
    return $('#Health-checks');
  }

  get accessTokenSection() {
    return $('#get-access-token');
  }

  async open() {
    await browser.url('https://developer.key.com/');
  }

  async clickExploreAPIs() {
    await this.exploreAPIsButton.click();
  }

  async clickOnboarding() {
    await this.onboardingButton.click();
  }

  async clickUsingOurAPIs() {
    await this.usingOurAPIsButton.click();
  }

  async clickGetToken() {
    await this.getTokenButton.click();
  }

  async isOnboardingSectionPresent() {
    return this.onboardingOverviewSection.isExisting();
  }

  async isOnboardingSectionDisplayed() {
    return this.onboardingOverviewSection.isDisplayed();
  }

  async getHealthChecksText() {
    return this.healthChecksSection.getText();
  }

  async getAccessTokenText() {
    return this.accessTokenSection.getText();
  }
}

export default new DeveloperPage();
