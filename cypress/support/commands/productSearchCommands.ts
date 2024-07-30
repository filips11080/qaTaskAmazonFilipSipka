import { priceRegex } from "../../utils/helpers"
import { login, productSearch } from "../locators"

export {}
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
        searchProduct(name:string): Chainable<void>
        averagePrice(pages:number): Chainable<void>

    }
  }
}
Cypress.Commands.add('searchProduct', (name) => {
    productSearch.inp_search().clear().type(name)
    productSearch.li_product(name).click()
})

Cypress.Commands.add('averagePrice', (pages:number) => {
    let priceArray: number[] = []

    for(let i=1; i<pages; i++){

        productSearch.lbl_productPriceSearchPage()
        .each(($el, index, $list) => {
            productSearch.lbl_productPriceSearchPage()
                .eq(index)
                .invoke('text')
                .then(price => {
                    const productPrice = priceRegex(price)
                    priceArray.push(productPrice)
                })
    })
    }



})