/// <reference types='cypress' />
import { LoginPageEl } from "./LoginPage.el.po";

export class LoginPage extends LoginPageEl{
    
    openPage = () => cy.visit('/login');
    fillEmail(email){
        this.emailField.clear().type(email);
    }

}