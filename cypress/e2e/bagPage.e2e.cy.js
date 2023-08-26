const header = require("../pages/components/header");
const mainPage = require("../pages/mainPage");
const loginPage = require("../pages/loginPage");
const clothesPage = require("../pages/clothesPage");
const itemPage = require("../pages/itemPage");

describe("Bag tests", () => {
  it("should add item to bag", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickManButton();
    header.clickClothingButton();
    header.clickBestsellersButton();
    mainPage.clickDeliverPopup();
    mainPage.clickCloseButton();
    clothesPage.clickFavButton();
  });

  //       it('should add item to bag', () => {
  //     loginPage.navigate('https://www.asos.com/')
  //     header.clickManButton()
  //     header.clickClothingButton()
  //     header.clickBestsellersButton()
  //     mainPage.clickDeliverPopup()
  //     mainPage.clickCloseButton()
  //     clothesPage.clickFirstItemButton()
  //     itemPage.clickAddButton()
  //   })
});
