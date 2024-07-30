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

/*
- Update specific value/s for desired json
*/
Cypress.Commands.add('updateJsonValues', (fixtureName, updates) => {
  cy.fixture(fixtureName).then(content => {
    Object.assign(content, updates)
    cy.writeFile(`cypress/fixtures/${fixtureName}.json`, content)
  })
})

/*
- Clear all values of desired json
*/
Cypress.Commands.add('clearJsonValues', fixtureName => {
  cy.fixture(fixtureName).then(data => {
    Object.keys(data).forEach(key => (data[key] = null))
    cy.writeFile(`cypress/fixtures/${fixtureName}.json`, data)
  })
})

Cypress.Commands.add('launchStore', (url) => {
    cy.visit(url)
    cy.assertUrl(url)
})