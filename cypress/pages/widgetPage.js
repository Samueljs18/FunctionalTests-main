class widgetPage {


    elementos = {
        botaoStartStop: () => cy.get('#startStopButton'),
        botaoResetar: () => cy.get("#resetButton"),
        barraRolagem: () => cy.get("div.progress-bar", { timeout: 30000 }),

    }


    validarSeValorBarraRolagemMenorQue25() {
        this.elementos.barraRolagem().invoke('text')
            .then(text => {
                const numberVal = parseInt(text, 10);
                expect(numberVal).to.be.lte(25);
            });
    }

    validarSeValorBarraRolagemIgualA(valor) {
        this.elementos.barraRolagem()
            .should($progress => {
                const val = parseInt($progress.attr('aria-valuenow'), 10);
                expect(val).to.eq(valor);
            });
    }


    validarSeValorBarraRolagemMenorQue25() {
        this.elementos.barraRolagem().invoke('text')
            .then(text => {
                const numberVal = parseInt(text, 10);
                expect(numberVal).to.be.lte(25);
            });
    }

    clicarbotaoResetar() {
        cy.wait(2000);
        this.elementos.botaoResetar().click();
    }

    clicarBotaoStartStop() {
        this.elementos.botaoStartStop().click();
    }


}

export default new widgetPage()