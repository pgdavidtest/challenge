//Appliance page containing specific selectors and actions

class Appliance {
  //PageObject
  get pickup() {
    return $$(".c-facet-text");
  }
  get subcategory() {
    return $$(".header-bar-cta.v-fw-regular");
  }
  get SiteLogo() {
    return $(".logo");
  }

  //Actions

  async ProductByName(text) {
    const Product = await $(`//span[text()=${text}`);

    await Product.waitForClickable();
    await Product.click();
  }

  async selectCategory(text) {
    const cat = $(`//a[normalize-space()='${text}']`);
    cat.scrollIntoView;
    await cat.waitForDisplayed();
    cat.waitForClickable();
    await cat.click();
  }

  async clickSiteLogo() {
    await this.SiteLogo.click();
  }

  async selectProduct(product) {
    const cat = $(`//a[contains(text(),'${product}')]`);
    cat.scrollIntoView;
    await cat.waitForDisplayed();
    await cat.click();
  }
}

export default new Appliance();
