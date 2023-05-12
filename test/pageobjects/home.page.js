import Page from './page.js'
import { Key } from 'webdriverio'

class HomePage extends Page {
    
    get inputSearch () {
        return $('#cb1-edit')
    }

    get buttonAcceptCookies() {
        return $('button[data-testid="action:understood-button"]')
    }
    
    async search (key) {
        await this.inputSearch.setValue(key)
        await browser.keys(Key.Enter)
    }

    async acceptCookies(){
        await this.buttonAcceptCookies.click()
    }
    
    open(){
        return super.open('/')
    }
}

export default new HomePage()




