import HomePage from "./home.page";

class CommonPage {
  get surveyPopUp() {
    return $("#shop-pushdown-ad-81455504");
  }
  get rejectSurvey() {
    return $("#survey_invite_no");
  }
  async openHomePage() {
    await browser.url("https://bestbuy.com");
  }
}
export default new CommonPage();
