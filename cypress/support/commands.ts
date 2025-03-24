/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";

const loginPg = new LoginPage();

//I needed to use the same fucntion for test cases and before each hence i overloaded the function.
Cypress.Commands.add("login", (email?: string, password?: string) => {
  if (!email || !password) {
    loginPg.visit();
    email = Cypress.env("VALID_USERNAME");
    password = Cypress.env("VALID_PASSWORD");
  }

  loginPg.fillEmail(email);
  loginPg.fillPassword(password);
  loginPg.submit();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      login(): Chainable<void>;
    }
  }
}
