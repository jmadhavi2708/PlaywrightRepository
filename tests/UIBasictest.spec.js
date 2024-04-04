

const {test} = require('@playwright/test');
const { Loginpage } = require('../pageobjects/Loginpage');
const { SearchPage } = require('../pageobjects/SearchPage');
const { SoftwarePage } = require('../pageobjects/SoftwarePage');
const { CartPage } = require('../pageobjects/CartPage');
require ('../pageobjects/Loginpage');
require ('../pageobjects/SearchPage');
require ('../pageobjects/SoftwarePage');
require ('../pageobjects/CartPage');





test('AddOneProduct',async({page})=>
{
    const loginPage = new Loginpage(page);
    const searchPage = new SearchPage(page);
    const softwarePage = new SoftwarePage(page);
    const cartPage = new CartPage(page);
    const username = "jmadhavi.qa@gmail.com";
    const password = "December@2024";
    const item = 'ipod';
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
    await loginPage.verifyTitle();
await page.waitForLoadState('networkidle');
await searchPage.selectCategorySoftware();
await searchPage.searchForItem(item);
await searchPage.clickSearchButton();
await softwarePage.itemSelect();
await softwarePage.addCart();
await cartPage.verifyCartItem();
await cartPage.itemCheckout();
 


})