import HomePage from './page.js';
import Item from '../elements/item.js'

class ListPage extends HomePage {
    
    get buttonNextPage () {
        return $('=Siguiente')
    }

    get items () {
        return $$('.shops__cardStyles')
    }

    async goToNextPage() {
        await this.buttonNextPage.click()
    }

    async extractInformationFromPage(){
        const itemsInformations = []
        const items$ = await this.items
        for (const item$ of items$){
            const itemInformation = await new Item(item$).extractInformation()
            itemsInformations.push(itemInformation)
        }
        return itemsInformations
    }
}

export default new ListPage()