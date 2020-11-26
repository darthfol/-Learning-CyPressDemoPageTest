/// <reference types='cypress' />
import AddCustomerPage from '../PageObjects/AddCustomerPage';

describe("Work", () => {

    before(function () {
        cy.fixture('person.json').then(function (data) {
            this.data = data;
        })
    })
    it("Temp", function () {
        let addCustomer = new AddCustomerPage();
        cy.login('admin@yourstore.com', 'admin');
        cy.visit('https://admin-demo.nopcommerce.com/Admin/Customer/Create');
      //  addCustomer.chooseManagerOfVendor(this.data.Vendor);
          addCustomer.fillForm(this.data)

    })

});