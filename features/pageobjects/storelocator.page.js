//Store locatore page containing specific selectors and actions

class StoreLocator {
  //PageObject
  get locatorSearch() {
    return $(".tb-input.form-control.zip-code-input.v-medium");
  }
  get goButton() {
    return $('//button[normalize-space()="Go"]');
  }
  get storeClass() {
    return $$(".icon-content");
  }
  get siteLogo() {
    return $(".logo");
  }

  //Actions
  async searchForStores(text) {
    await this.locatorSearch.waitForClickable();
    await this.locatorSearch.click();
    await this.locatorSearch.setValue(text);
    browser.waitUntil(5000);
    await this.goButton.waitForClickable();
    await this.goButton.click();
  }

  async clickSiteLogo() {
    await this.goButton.waitForClickable();
    await this.goButton.click();
  }
}
export default new StoreLocator();
