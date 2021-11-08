import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page";
import CommonPage from "../pageobjects/common.page";
import SearchPage from "../pageobjects/search.page";
import allureReporter from "@wdio/allure-reporter";
import ProductPage from "../pageobjects/product.page";
import AppliancePage from "../pageobjects/appliance.page";

// search by SKU
When(/^I search by product sku$/, async (table) => {
  const tableRow = table.hashes();
  for (const ele of tableRow) {
    console.log("Searching Item , " + (await ele.SKU));
    await HomePage.searchItem(await ele.SKU);
  }
});

Then(
  /^I shall verify the ProductName Matches the SKU displayed$/,
  async (table) => {
    const tableRow = table.hashes();
    for (const element of tableRow) {
      allureReporter.addSeverity("trivial");
      console.log("The product SKU is", await ProductPage.getSKU());
      expect(await element.SKU).toEqual(await ProductPage.getSKU());
      expect(browser.getTitle).toHaveTextContaining(await element.ProductName);
      await HomePage.siteLogo.click();
    }
  }
);
