/// <reference types='cypress' />

class CustomerPage {

    clickCustomerBtn() {
        cy.get('.bg-blue').click();
    }

    fillEmail(email) {
        cy.get('#SearchEmail').clear().type(email);
    }

    clickSearchBtn() {
        cy.get('#search-customers').click();
    }



}
export default CustomerPage;