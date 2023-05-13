import HomePage from '../pageobjects/home.page.js'
import ListPage from '../pageobjects/list.page.js'
import FileHelper from '../helpers/file.helper.js'

describe('Mercadolibre', () => {
    it('Search Camisetas and extract information', async () => {
        let pagesInformation = []
        const pageQuantity = 3
        const searchKey = 'Camisetas'
        await HomePage.open()
        await HomePage.acceptCookies()
        await HomePage.search(searchKey)
        
        for (let i = 1; i <= pageQuantity; i++){
            const pageInformation = await ListPage.extractInformationFromPage()
            pagesInformation = [...pagesInformation, ...pageInformation]
            if (i !== pageQuantity){
                await ListPage.goToNextPage()
            }
        }

        FileHelper.saveData(pagesInformation)
    })
})