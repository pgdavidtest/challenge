import { Given, When, Then } from "@wdio/cucumber-framework";
import StoreLocator from "../pageobjects/storelocator.page";
import HomePage from "../pageobjects/home.page";
import allureReporter from "@wdio/allure-reporter";

//Search stores by zipcode
When(/^I search for stores and by zipcode$/, async (table) => {
  const tableRow = table.hashes();
  for (const ele of tableRow) {
    console.log("Searching Item , " + (await ele.Search));
    await HomePage.searchItem(await ele.Search);
  }
});

Then(/^I shall see Stores near 19152$/, async (table) => {
  const tableRow = table.hashes();
  for (const element of tableRow) {
    allureReporter.addSeverity("minor");
    var Title = await browser.getTitle();
    await StoreLocator.searchForStores(await element.zipcode);
    var StoreCount = await StoreLocator.storeClass.length;
    const ThestoreCount = StoreCount.toString();
    expect(ThestoreCount).toEqual(await element.NumberOfStores);
    StoreLocator.clickSiteLogo;
  }
});
