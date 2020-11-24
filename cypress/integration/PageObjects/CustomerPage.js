/// <reference types='cypress' />

class CustomerPage {

    addCustomerBtn(){
        cy.get('form>.content-header>.pull-right>a').click();
    }
    
 
}
export default CustomerPage;