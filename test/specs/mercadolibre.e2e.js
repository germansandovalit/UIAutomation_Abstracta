import HomePage from "../pageobjects/home.page.js"
import ListPage from "../pageobjects/list.page.js"

describe('Mercadolibre', () => {
    it('Search a Camisetas and extract information', async () => {
        await HomePage.open()
        await HomePage.search('Camisetas')
        
        await ListPage.extractInformation() 
    })
})