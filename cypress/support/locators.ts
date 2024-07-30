export const login = {
    ddl_accountAndList: () => cy.get("[data-nav-role='signin'][id='nav-link-accountList']"),
    btn_signIn: () => cy.get("[data-nav-role='signin'][data-nav-ref='nav_signin']"),
    lbl_signIn: () => cy.get("h1").contains('Sign in'),
    inp_email: () => cy.get("[id='ap_email']"),
    btn_continue: () => cy.get("input[id='continue']"),
    inp_password: () => cy.get("[id='ap_password']"),
    btn_passwordSingIn: () => cy.get("[id='signInSubmit']"),
    lbl_currentUser: (name: string) => cy.get("[id='nav-link-accountList-nav-line-1']").contains(`${name}`)
}

export const productSearch = {

inp_search: () => cy.get("[id='twotabsearchtextbox']"),
li_product: (product:string) => cy.get(`[aria-label='${product}']`),
lbl_productPriceSearchPage: () => cy.get("span[class='a-price']").children("span[class='a-offscreen']")
}