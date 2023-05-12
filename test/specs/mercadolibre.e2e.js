import HomePage from '../pageobjects/home.page.js'
import ListPage from '../pageobjects/list.page.js'
import FileHelper from '../helpers/file.helper.js'

describe('Mercadolibre', () => {
    it('Search a Camisetas and extract information', async () => {
        let pagesInformation = []
        const pageQuantity = 3
        await HomePage.open()
        await HomePage.acceptCookies()
        await HomePage.search('Camisetas')
        
        for (let i = 1; i <= pageQuantity; i++){
            const pageInformation = await ListPage.extractInformationFromPage()
            pagesInformation = [...pagesInformation, ...pageInformation]
            if (i !== pageQuantity){
                await ListPage.goToNextPage()
            }
        }

        const data = JSON.stringify(pagesInformation)
        FileHelper.saveData('data123.json', data)

    })
})