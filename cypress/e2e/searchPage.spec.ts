import { productSearch } from "../support/locators"

describe('Search page tests', () => {

    const url = Cypress.env('prodUrl')

    beforeEach('Go to Amazon',() => {
        cy.launchStore(url)
    })

    it('Calculate price', () => {
        cy.fixture('testData').then(data => {
            cy.searchProduct(data.productName)
            cy.averagePrice(2)
        })
    })
})