import { priceRegex } from "../../utils/helpers"
import { login, productSearch } from "../locators"

export {}
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
        searchProduct(name:string): Chainable<void>
        averagePrice(pages:number): Chainable<void>
        validateSearchResultPage(name:string): Chainable<void>
        averagePricePerPage(pages:number): Chainable<void>

    }
  }
}
Cypress.Commands.add('searchProduct', (name) => {
    productSearch.inp_search().clear().type(name)
    productSearch.li_product(name).click()
})

Cypress.Commands.add('validateSearchResultPage', (name) => {
    productSearch.lbl_searchResultTerm(name)
    productSearch.lbl_results() 
})


Cypress.Commands.add('averagePricePerPage', (pages:number) => {
    let priceArray = []
    let sum: number = 0
    let currentPage = 1
    
    const getPricesFromPage = () => {

      return  productSearch.lbl_productPriceSearchPage()
        .each(($el, index, $list) => {
            productSearch.lbl_productPriceSearchPage()
                .eq(index)
                .invoke('text')
                .then(price => {
                    const productPrice = priceRegex(price)
                    priceArray.push(productPrice)
                    sum += productPrice
                })
            })
            .then(() => {
                let avg = sum / priceArray.length
                cy.log("Average product price for page: " + currentPage + " is: " + avg)
                console.log("Average product price for page: " + currentPage + " is: " + avg)
                priceArray = []
            })
            .then(() => {
                cy.get('.s-pagination-selected').invoke('text').should('eq', currentPage.toString())
                .then(() => {
                    if(currentPage != pages){
                        productSearch.btn_nextPage().click().then(() => {
                            currentPage ++
                        })
                    }

                })                
                .then(() => {
                    cy.get('.s-pagination-selected').invoke('text').should('eq', currentPage.toString())
                })
            })
        }
        if (pages => 1) {
            for(let i = 1; i <= pages; i++){
                getPricesFromPage()
            }
        }    
    
})

