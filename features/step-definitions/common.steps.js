import { Given, When, Then } from "@wdio/cucumber-framework";

import HomePage from "../pageobjects/home.page";
import CommonPage from "../pageobjects/common.page";
import SearchPage from "../pageobjects/search.page";
import ProductPage from "../pageobjects/product.page";
import allureReporter from "@wdio/allure-reporter";

Given(/^I am on the home page$/, async () => {
  allureReporter.addFeature('Search Feature')
  allureReporter.addEnvironment('Production')
  //expect(browser.getTitle).toHaveTextContaining(
   //"Best Buy | Official Online Store | Shop Now & Save"
  //);
});
