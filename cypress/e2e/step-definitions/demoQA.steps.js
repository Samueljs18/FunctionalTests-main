import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa a página de login", () => {
  cy.visit("/login");
});

When("ele preenche usuário e senha válidos", () => {
  cy.get("#username").type("admin");
  cy.get("#password").type("123456");
});

When("clica no botão de login", () => {
  cy.get("#loginButton").click();
});

Then("ele deve ser redirecionado para a home", () => {
  cy.url().should("include", "/home");
});