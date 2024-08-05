export {}
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      checkCheckbox(selector: any): Chainable<void>
      assertUrl(value: string): Chainable<void>
      updateJsonValues(filePath: string, updates: Record<string, any>): Chainable<void>
      clearJsonValues(filePath: string): Chainable<void>
      launchStore(url: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('checkCheckbox', selector => {
  selector
    .check({ force: true })
    .should('be.checked')
})

Cypress.Commands.add('assertUrl', value => {
  cy.url()
    .should('include', value)
})

Cypress.Commands.add('launchStore', (url) => {
    cy.visit(url)
    cy.assertUrl(url)
})