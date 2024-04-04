class Loginpage{

constructor(page)
{
    this.page=page;
    this.username=page.locator("[name='email']");
    this.password=page.locator("[name='password']");
    this.signInbutton=page.locator("[value='Login']");
    this.title=page.locator("data-id='21738']");
    this.invalidCredentials=page.locator("[class='alert-danger']");
}
async goTo()
{
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
}

async verifyTitle()
{
    await expect(await this.title.toHaveText('This is a dummy website for Web Automation Testing'));
}

async invalidDetails()
{
    await expect(await this.title.toHaveText(' Warning: No match for E-Mail Address and/or Password.'));
}



async validLogin(username,password)
{
    
    await this.username.fill(username);
   
    await this.password.fill(password);
    await this.signInbutton.click();
    
}
}
module.exports={Loginpage}