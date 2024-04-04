class SoftwarePage{

    constructor(page)
    {
        this.page=page;
        this.selectItem=page.getByRole('link', { name: 'iPod Touch', exact: true }).nth(2);
        this.itemAddCart=page.getByRole('button',{ name: 'Add to Cart '});
        this.itemViewCart=page.getByRole('button',{ name: 'View Cart '});
      
    }

    async itemSelect() {
        await this.selectItem.click();
      }

      async addCart(){
        await this.itemAddCart.click();
      }
      async viewCart(){
        await this.itemViewCart.click();
      }

    }
    module.exports={SoftwarePage}