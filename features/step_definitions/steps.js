const playwright = require('@playwright/test');
const { Loginpage } = require('../../pageobjects/Loginpage');
const {POManager} = require('../../pageobjects/POManager') ;


const username = "jmadhavi.qa@gmail.com";
const password = "December@2024";


  Given('User has opened LamdaTest on the browser', async function () {
   const browser = playwright.chromium.launch();
    const context  = await browser.newContext();
    const page = await context.newPage();
     this.pOManager = new POManager(page);
     const loginPage = pOManager.Loginpage(page);
    await loginPage.goTo();

  });



  When('User enter valid {username} and {password}', async function (username,password) {
    await this.pOManager.loginPage.validLogin(username,password);
   
  });


  When('User click the login button on valid case', async function () {
   
    return 'pending';
  });



  Then('Showing  title at the top of the page', async  function () {
    await this.pOManager.loginPage.verifyTitle();
    await page.waitForLoadState('networkidle');
   
  });