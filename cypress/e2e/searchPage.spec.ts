import { productSearch } from "../support/locators"

describe('Search page tests', () => {

    const url = Cypress.env('prodUrl')

    beforeEach('Go to Amazon',() => {
        cy.launchStore(url)
    })

    it('Validate search functionality', () => {
        cy.fixture('testData').then(data => {
        cy.searchProduct(data.productName)
        cy.validateSearchResultPage(data.productName)
        cy.searchProduct(data.searchTermLong)
        cy.validateSearchResultPage(data.searchTermLong)
        })
    })
})