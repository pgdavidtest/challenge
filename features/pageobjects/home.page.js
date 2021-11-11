// Home page containing specific Page Objects and Actions

class HomePage {
  // Page Objets

  get siteLogo() {
    return $(".logo");
  }
  get btnCloseLoginModal() {
    return $(".email-submission-modal #Close_Cancel_Line");
  }
  get inputSearch() {
    return $("#gh-search-input");
  }
  get searchIcon() {
    return $(".header-search-icon");
  }

  // Acctions

  async searchItem(SearchedItem) {
    try {
      await this.inputSearch.waitForClickable();
      await this.inputSearch.doubleClick();
      browser.keys("Delete");
      await this.inputSearch.waitForDisplayed();
      await this.inputSearch.setValue(await SearchedItem);
      await this.searchIcon.click();
    } catch (error) {
      console.log(error);
    }
  }

  async closePopUp() {try {
    this.btnCloseLoginModal.waitForExist(15000);
    if (this.btnCloseLoginModal.isExisting) {
      await this.btnCloseLoginModal.click();
    } else {
      console.log("Pop Up does not exist");
    }
  }catch(error){console.log('error')}
  }
}
export default new HomePage();
