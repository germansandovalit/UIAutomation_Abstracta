export default class Item {
    
    constructor(element){
        this.element = element
    }

    async getTitle(){
        return this.element.$('.ui-search-item__group--title').$(".ui-search-item__title").getText()
    }

    async getPrice(){
        return this.element.$(".shops__price-second-line").$(".price-tag-text-sr-only").getText()
    }

    async getLink(){
        return this.element.$('.ui-search-item__group--title').$('.ui-search-link').getAttribute('href')
    }
    
    async extractInformation(){
        return {
            title: await this.getTitle(),
            price: await this.getPrice(),
            link: await this.getLink()
        }
    }
}
