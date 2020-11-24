/// <reference types='cypress' />

class AddCustomerPage {

    fillEmail(email) {
        cy.get('#Email').clear().type(email);
    }

    fillPassword(password) {
        cy.get('#Password').clear().type(password);
    }

    fillFirstName(firstName) {
        cy.get('#FirstName').clear().type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#LastName').clear().type(lastName);
    }

    choseGender(gender) {
        cy.get('input[name=Gender]').check(gender);
    }

    fillDateOfBirth(dateOfBirth) {
        cy.get('#DateOfBirth').clear().type(dateOfBirth)
    }

    fillCompanyName(companyName) {
        cy.get('#Company').clear().type(companyName);
    }

    checkIsTaxExempt(DoCheck) {
        const checkBox = cy.get('#IsTaxExempt');
        (DoCheck) ? checkBox.check() : checkBox.uncheck();
    }

    chooseNewsletter(newsletterOption) {
        newsletterOption.forEach(Option => {
            cy.get(':nth-child(9) > .col-md-9 > .input-group > .k-widget > .k-multiselect-wrap').click()
                .type(Option).type('{enter}');
        });

    }
    //Select
    //Admin comment

}
export default AddCustomerPage;