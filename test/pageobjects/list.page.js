import HomePage from './page.js';
import Item from '../elements/item.js'

class ListPage extends HomePage {
    
    get buttonNextPage () {
        return $('=Siguiente')
    }

    get item () {
        return $('.shops__cardStyles')
    }

    async goToNextPage() {
        await this.buttonNextPage.click()
    }

    async extractInformation(){
        const item$ = await this.item
        console.log(await new Item(item$).extractInformation())
    }
}

export default new ListPage()