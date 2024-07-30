describe('Login to Amazon', () => {

    const user = Cypress.env('prodEmail')
    const pass = Cypress.env('prodPassword')
    const url = Cypress.env('prodUrl')
    const name = Cypress.env('prodUserName')


    beforeEach('Go to Amazon',() => {
        cy.launchStore(url)
    })

    it('Login to Amazon',() => {
        cy.loginToStore(user, pass, name)
    })

})

