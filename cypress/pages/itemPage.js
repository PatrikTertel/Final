class itemPage {
  get addButton() {
    return cy.get(".jAEfQ");
  }

  clickAddButton() {
    this.addButton.scrollIntoView();
    this.addButton.click();
  }
}

module.exports = new itemPage();
