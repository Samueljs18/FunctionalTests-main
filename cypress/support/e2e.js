// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@4tw/cypress-drag-drop';

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignora erro específico
  if (err.message.includes("Script error")) {
    return false;
  }
 
});

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'getMonth')")) {
    return false; // impede o Cypress de falhar o teste
  }

});

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Lr.findDOMNode is not a function")) {
    return false; // impede o Cypress de falhar o teste
  }

});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('findDOMNode')) {
    return false;
  }
});