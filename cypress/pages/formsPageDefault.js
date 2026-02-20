class formsPageDefault {


    elementos = {
        botaoSubmit: () => cy.get('#submit'),
        campoNome: () => cy.get('#firstName'),
        campoSobrenome: () => cy.get('#lastName'),
        campoEmail: () => cy.get('#userEmail'),
    }

    clicarbotao(botaoLocator) {
        cy.contains(botaoLocator).click();
    }

   clicarBotaoSubmit() {
        this.elementos.botaoSubmit().click();
    }

    preencherNome(nome) {
        this.elementos.campoNome().clear().type(nome)
    }

    preencherCampoSobreme(sobrenome) {
        this.elementos.campoSobrenome().clear().type(sobrenome)
    }

    preencherCampoEmail(email) {
        this.elementos.campoEmail().clear().type(email)
    }

}

export default new formsPageDefault()