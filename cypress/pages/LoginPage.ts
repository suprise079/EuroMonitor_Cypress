// cypress/pages/LoginPage.ts
export default class LoginPage {
  private readonly usernameInput = "#user-name";
  private readonly passwordInput = "#password";
  private readonly loginButton = "#login-button";
  private readonly errorMessage = "h3[data-test='error']";

  visit(): void {
    cy.visit(Cypress.env("BASE_URL"));
  }

  fillEmail(username: string): void {
    cy.get(this.usernameInput).type(username);
  }

  fillPassword(password: string): void {
    cy.get(this.passwordInput).type(password);
  }

  verifyLoginSuccess(): void {
    cy.url().should("include", "/inventory.html");
  }

  verifyLoginError(expectedMsg: string): void {
    //.should("have.text", expectedMsg);
    cy.get(this.errorMessage).should("have.text", expectedMsg);
  }

  submit(): void {
    cy.get(this.loginButton).click();
  }
}
