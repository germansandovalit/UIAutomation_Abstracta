import HomePage from '../pageobjects/home.page.js'
import ListPage from '../pageobjects/list.page.js'
import FileHelper from '../helpers/file.helper.js'

describe('Mercadolibre', () => {
    it('Search Camisetas and extract information', async () => {
        let itemsInformation = []
        const pageQuantity = 3
        const searchKey = 'Camisetas'
        await HomePage.open()
        await HomePage.acceptCookies()
        await HomePage.search(searchKey)
        
        for (let i = 1; i <= pageQuantity; i++){
            const currentItemsInformation = await ListPage.extractInformationFromPage()
            itemsInformation = [...itemsInformation, ...currentItemsInformation]
            if (i !== pageQuantity){
                await ListPage.goToNextPage()
            }
        }

        FileHelper.saveData(itemsInformation)
    })
})