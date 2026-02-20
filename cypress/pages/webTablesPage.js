import formsPageDefault from "./formsPageDefault";
class webTablesPage {


    elementos = {
        tituloNovaPagina: () => cy.get('#sampleHeading'),
        botaoAdicionar: () => cy.get('#addNewRecordButton'),
        campoIdade: () => cy.get('#age'),
        campoSalario: () => cy.get('#salary'),
        campoDepartamento: () => cy.get('#department'),
        dadosUltimoRegistro: () => cy.get('tbody > tr').last(),
        botaoExcluirUltimoRegistro: () => cy.get('[title="Delete"]').last(),
        botaoEditarUltimoRegistro: () => cy.get('[title="Edit"]').last(),
    }


    clicarBotaoAdicionar() {
        this.elementos.botaoAdicionar().click();
    }

    clicarbotaoEditarUltimoRegistro() {
        this.elementos.botaoEditarUltimoRegistro().click({force:true});
    }

    clicarbotaoExcluirUltimoRegistro() {
        this.elementos.botaoExcluirUltimoRegistro().click({force:true});
    }
    preencherCampoIdade(idade) {
        this.elementos.campoIdade().clear().type(idade)
    }

    preencherCampoSalario(salario) {
        this.elementos.campoSalario().clear().type(salario)
    }

    preencherCampoDepartamento(departamento) {
        this.elementos.campoDepartamento().clear().type(departamento)
    }

    validarSeUsuarioFoiCadastradoComSucesso() {
        this.elementos.dadosUltimoRegistro().should("have.text", "ClaudineMertz22Claudine_Mertz53@hotmail.com3500Qualidade");
    }

    validarSeUsuarioFoiEditadoComSucesso() {
        this.elementos.dadosUltimoRegistro().should("have.text", "SamuelSilva22samuel@teste.com350000Cloud");
    }

    validarSeUsuarioFoiExcluidoComSucesso() {
        this.elementos.dadosUltimoRegistro().should("not.equal", "SamuelSilva22samuel@teste.com350000Cloud");
    }

    preencherCamposFormulario(nome, sobrenome, email, idade, salario, departamento) {
        formsPageDefault.preencherNome(nome);
        formsPageDefault.preencherCampoSobreme(sobrenome);
        formsPageDefault.preencherCampoEmail(email);
        this.preencherCampoIdade(idade);
        this.preencherCampoSalario(salario);
        this.preencherCampoDepartamento(departamento);
        formsPageDefault.clicarBotaoSubmit();
    }
}

export default new webTablesPage()