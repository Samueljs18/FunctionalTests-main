class alertsFramePage {


    elementos = {
        tituloNovaPagina: () => cy.get('#sampleHeading')
    }


    ValidarSeTextoNovaPaginaEstaDeAcordoComEsperado(texto) {
        this.elementos.tituloNovaPagina()
            .should('be.visible')
            .and('have.text', texto)
    }

    forcarRedirecionamentoParaOutraAba() {
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })
    }

}

export default new alertsFramePage()