const {LoginPage} = require('./Loginpage');
const {SearchPage} = require('./SearchPage');
const {SoftwarePage} = require('./SoftwarePage');
const {CartPage} = require('./CartPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.searchPage = new SearchPage(this.page);
    this.SoftwarePage = new SoftwarePage(this.page);
    this.cartPage = new CartPage(this.page);


}

getLoginPage()
{
    return this.loginPage;
}

getCartPage()
{
    return this.cartPage;
}

getSearchPage()
{
    return this.searchPage;
}
getSoftwarePage()
{
    return this.softwarePage;
}


}
module.exports = {POManager};