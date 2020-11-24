/// <reference types='cypress' />

describe("Work", () => {
    it("Temp", () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.visit('https://admin-demo.nopcommerce.com/Admin/Customer/Create');
        cy.get(':nth-child(9) > .col-md-9 > .input-group > .k-widget > .k-multiselect-wrap').click().type('Test store 2').type('{enter}');
        // cy.get(':nth-child(9) > .col-md-9 > .input-group > .k-widget > .k-multiselect-wrap')
    })

});