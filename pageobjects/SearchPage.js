class SearchPage{

    constructor(page)
    {
        this.page=page;
       
        this.AllCategories=page.getByRole('button', { name: 'All Categories' });
        this.categorySoftware=page.locator('#entry_217822').getByRole('link',{ name: 'Software' });
        this.itemSearch=page.getByRole('textbox', { name: 'Search For Products' });
        this.searchButton=page.locator('#entry_217822').getByRole('button', { name: 'Search' })
      
      
    }

    async selectCategorySoftware() {
        await this.AllCategories.click();
       await this.categorySoftware.click();
       await this.searchButton.click();
      }

      async searchForItem(item) {
        await this.itemSearch.fill(item);
      }

      async clickSearchButton() {
        await this.searchButton.click()
      }
}
module.exports={SearchPage}