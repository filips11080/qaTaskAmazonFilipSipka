import { login } from "../locators"

export {}
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {

        loginToStore(email:string, password:string, name:string): Chainable<void>
        verifyLoggedUser(name:string): Chainable<void>

    }
  }
}

Cypress.Commands.add('loginToStore', (email, password, name) => {
    login.ddl_accountAndList().trigger('mouseover')
    login.btn_signIn().click()
    login.lbl_signIn()
    login.inp_email().type(email)
    login.btn_continue().click()
    login.inp_password().type(password)
    login.btn_passwordSingIn().click()
    cy.verifyLoggedUser(name)
    
}) 

Cypress.Commands.add('verifyLoggedUser', (name) => {
    login.lbl_currentUser(name)
}) 