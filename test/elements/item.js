export default class Item {
    
    constructor(element){
        this.element = element
    }

    async getName(){
        return this.element.$('.ui-search-item__group--title').$('.ui-search-item__title').getText()
    }

    async getPrice(){
        const textPrice = await this.element.$('.shops__price-second-line').$('.price-tag-text-sr-only').getText()
        const textPricePieces = textPrice.split(' ')
        const units = textPricePieces[0]
        const cents = textPricePieces[3] ? textPricePieces[3] : '00'
        return `${units}.${cents}`
    }

    async getLink(){
        return this.element.$('.ui-search-item__group--title').$('.ui-search-link').getAttribute('href')
    }
    
    async extractInformation(){
        return {
            name: await this.getName(),
            price: await this.getPrice(),
            link: await this.getLink()
        }
    }
}
