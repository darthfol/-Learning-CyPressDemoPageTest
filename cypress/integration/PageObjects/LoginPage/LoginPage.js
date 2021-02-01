/// <reference types='cypress' />

class LoginPage {

    



    fillPassword(passwd) {
       .clear().type(passwd);
    }

    logIn() {
        .click();
    }




}
export default LoginPage;