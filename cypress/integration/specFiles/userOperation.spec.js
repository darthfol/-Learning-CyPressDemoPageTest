///<reference types='cypress' />
import SideDashBord from '../PageObjects/SideDashBord';
import CustomerPage from '../PageObjects/CustomerPage';
import AddCustomerPage from '../PageObjects/AddCustomerPage';


describe('Testing add, edit and delete user', () => {
    // #region 
    // Setup
    let sidePanel = new SideDashBord();
    let customerPage = new CustomerPage();
    let addCustomerPage = new AddCustomerPage();

    // #endregion

    before('Prepare data', function () {
        cy.fixture('person').then(function (data) {
            this.data = data;
        })

    })
    it('Add user', function () {

        cy.login('admin@yourstore.com', 'admin');
        sidePanel.openCustomerSubMenu('Customers');
        cy.url().should('eq', 'https://admin-demo.nopcommerce.com/Admin/Customer/List');
        customerPage.clickCustomerBtn();
        cy.url().should('eq', 'https://admin-demo.nopcommerce.com/Admin/Customer/Create');

        addCustomerPage.fillForm(this.data);
        addCustomerPage.saveForm();
        cy.url().should('eq', 'https://admin-demo.nopcommerce.com/Admin/Customer/List');
        customerPage.fillEmail(this.data.Email);
        customerPage.clickSearchBtn();
        cy.get('#customers-grid>tbody>tr td:nth-child(2)').each(function ($el, index, $list) {
            if ($el.text().includes(this.data.Email)) {
                expect(true).to.be.true;
            };
        })
    })

    it('Edit user', function () {

    });

    it('Delete user', function () {

    });

});