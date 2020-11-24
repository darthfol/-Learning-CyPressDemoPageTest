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

    it('Add user', () => {
        cy.login('admin@yourstore.com', 'admin');
        sidePanel.OpenCustomerSubMenu('Customer');
        cy.url().should('eq', 'https://admin-demo.nopcommerce.com/Admin/Customer/List');

        customerPage.addCustomerBtn();



    })

});