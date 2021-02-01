export class LoginPageEl{
    emailField = () => cy.get('#Email');
    passwordField = () => cy.get('#Password');
    inputBtn = () => cy.get('input[type=submit')
}