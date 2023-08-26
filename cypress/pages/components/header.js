class header {
  get enterButton() {
    return cy.get("#myAccountDropdown > button");
  }

  clickEnterButton() {
    this.enterButton.click();
  }

  get myAccountButton() {
    return cy.get('[data-testid="myaccount-link"]');
  }

  clickMyAccountButton() {
    this.myAccountButton.click();
  }

  get manButton() {
    return cy.get("#men-floor");
  }

  clickManButton() {
    this.manButton.click();
  }

  get clothingButton() {
    return cy.get("div:nth-child(2) > .VylGWEt .yI6sHXc:nth-child(3)");
  }

  clickClothingButton() {
    this.clothingButton.click();
  }

  get bestsellersButton() {
    return cy.get(
      "#e87ba617-daa1-4b64-8f36-ab92e61283f7 li:nth-child(1) > .R5kwVNg",
    );
  }

  clickBestsellersButton() {
    this.bestsellersButton.click();
  }

  get favIconButton() {
    return cy.get('[data-testid="savedItemsIcon"]');
  }

  clickFavIconButton() {
    this.favIconButton.click();
  }
}
module.exports = new header();
