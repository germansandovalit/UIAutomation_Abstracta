import Page from "./page.js"
import { Key } from "webdriverio"

class HomePage extends Page {
    
    get inputSearch () {
        return $('#cb1-edit')
    }
    
    async search (key) {
        await this.inputSearch.setValue(key)
        await browser.keys(Key.Enter)
    }

    open(){
        return super.open("/")
    }
}

export default new HomePage()




