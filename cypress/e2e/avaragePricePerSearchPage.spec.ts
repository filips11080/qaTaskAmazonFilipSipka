import { productSearch } from "../support/locators"

describe('Calculate avarage price per search result page', () => {

    const url = Cypress.env('prodUrl')

    beforeEach('Go to Amazon',() => {
        cy.launchStore(url)
    })

    it('Calculate price', () => {
        cy.fixture('testData').then(data => {
            cy.searchProduct(data.averagePriceProduct)
            cy.averagePricePerPage(3)
        })
    })
})