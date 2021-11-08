//Search page containing specific selectors and actions

class SearchPage {
  //PageObject

  get sameDayPickupCheckbox() {
    return $("#store-pickup-pickuptoday");
  }
  get minPriceFilter() {
    return $("#min-currentprice_facet-input");
  }
  get maxPriceFilter() {
    return $("#mafacet-input");
  }
  get brandSearchFilter() {
    return $("brand_facet-search-bar-input");
  }
  get productCount() {
    return $('//span[@class="item-count"]');
  }
  get siteLogo() {
    return $(".logo");
  }

  //Actions

  async selectFilterByText(text) {
    const filterElement = await $(
      `//span[@class='facet-option-label-text'][normalize-space()='${text}']`
    );
    await filterElement.scrollIntoView();
    await filterElement.waitForClickable();
    await filterElement.click();
  }

  /*  async selectFilterByText2(text) {
    var i = 0;
    for (i = 0; i < this.checkBoxClass.length; i++) {
      const element = await checkBoxClass[i].getText();
      if (element === text) {
        await element.click();
      }
    }
  } */

  async selectPickUpToday(text) {
    const className = await $(`.c-facet-text=${text}`);
    await className.getText().click();
  }

  async getProductCount() {
    await this.productCount.waitForExist(10000);
    const numberOfResult = await this.productCount.getText();
    console.log("The Number Of Items Returned Is:", numberOfResult);
  }

  async selectProduct(Product) {
    const product = await $(`=${Product}`);
    await product.scrollIntoView();
    await product.waitForClickable();
    await product.click();
  }
}
export default new SearchPage();
