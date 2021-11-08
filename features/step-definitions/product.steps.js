import { Given, When, Then } from "@wdio/cucumber-framework";

import ProductPage from "../pageobjects/product.page";
import allureReporter from "@wdio/allure-reporter";
import SearchPage from "../pageobjects/search.page";
import HomePage from "../pageobjects/home.page";
import CommonPage from "../pageobjects/common.page";

// Search Store by product
When(
  /^I search for products, apply filter and validate results$/,
  async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
      console.log("Searching Item , " + (await element.SearchedItem));
      await HomePage.searchItem(await element.SearchedItem);
      await SearchPage.selectFilterByText(await element.Price);
      await SearchPage.selectFilterByText(await element.Color);
      await SearchPage.selectFilterByText(await element.Condition);
      await SearchPage.getProductCount();
      await SearchPage.selectProduct(await element.Product);
      const AverageRating = await ProductPage.averageRating.getText();
      expect(ProductPage.averageRating).toBeExisting;
      expect(await ProductPage.text_Specification).toExist();
      await ProductPage.reviewTag.waitForClickable();
      await ProductPage.reviewTag.scrollIntoView();
      const review = await ProductPage.reviewTag;
      await browser.execute("arguments[0].click();", review);
      var i = 0;
      for (i = 0; i < element.Iteration; i++) {
        allureReporter.addSeverity("blocker");
        console.log(
          "customers Reviews:",
          await ProductPage.reviews[i].getText()
        );
        allureReporter.addAttachment(await ProductPage.reviews[i].getText());
      }
      await HomePage.siteLogo.scrollIntoView();
      await HomePage.siteLogo.waitForClickable();
      await HomePage.siteLogo.click();
    }
  }
);
