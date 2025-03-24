// cypress/e2e/login.spec.ts
import LoginPage from "../pages/LoginPage";
import loginData from "../fixtures/loginData.json";
import { log } from "console";

describe("Login Tests", () => {
  const loginPg = new LoginPage();

  beforeEach(() => {
    loginPg.visit();
  });

  it("Verify that a valid user can successfully login", () => {
    const { email, password } = loginData.validUser;
    cy.login(email, password);
    loginPg.verifyLoginSuccess();
  });

  it("Verify that a lockedout user cannot login", () => {
    const { email, password, error } = loginData.lockedOutUser;
    cy.login(email, password);
    loginPg.verifyLoginError(error);
  });

  it("Verify that a user cannot login with invalid credentials", () => {
    const { email, password, error } = loginData.invalidCredentialsUser;
    cy.login(email, password);
    loginPg.verifyLoginError(error);
  });


});
