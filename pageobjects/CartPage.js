

class CartPage{
    
    constructor(page)
    {
        this.page=page;
       this.cartPopup=page.locator('div[role="alert"]');
       this.checkout=page.getByRole('button', { name: 'Checkout' });
    }
    async verifyCartItem()
    {
     await this.cartPopup.click();
    }

   async  itemCheckout()
   {
    await this.checkout.click();

   }
}
module.exports={CartPage}