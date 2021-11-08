//Brands page containing specific selectors and actions

class Brands {
  //PageObject
  get SelectorCategory() {
    return $$(".link-element");
  }
  get ClassTitle() {
    return $$(".heading-5.v-fw-regular");
  }

  get Category() {
    return $$(".link-element");
  }
  get SubCategory() {
    return $$(".link-element");
  }
  get SiteLogo() {
    return $(".logo");
  }
  get ProductPrice() {
    return $('(//span[text()="179.99"])[1]');
  }

  //Actions

  async clickProductByName(text) {
    const Product = await $(`${text}`);
    await Product.waitForClickable();
    await Product.click();
  }

  async clickSiteLogo() {
    await this.SiteLogo.click();
  }

  selectCategory = async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
      await this.SubCategory.forEach(async (value) => {
        const cat = await value.getText();
        const subcat = await value.getText();

        if (cat === element.Category) {
          await value.click();
          console.log("clicking on the element " + cat);
          return;
        }
      });
    }
  };

  selectSubCategory = async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
      await this.SubCategory.forEach(async (value) => {
        const subcat = await value.getText();

        if (subcat === element.SubCategory) {
          await value.click();
          console.log("clicking on the element " + subcat);
          console.log(await browser.getTitle());
          expect(browser.getTitle).toHaveTextContaining(await element.Name);
          return;
        }
      });
    }
  };
}

export default new Brands();
