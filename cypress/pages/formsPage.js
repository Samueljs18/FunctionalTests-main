import { gerarUsuario } from '../support/faker'

const usuario = gerarUsuario();

class formsPage {


    elementos = {

        opcaoGeneroMasculino: () => cy.get('#gender-radio-1'),
        opcaoGeneroFeminino: () => cy.get('#gender-radio-2'),
        campoTelefone: () => cy.get('#userNumber'),
        campoMateria: () => cy.get('#subjectsInput'),
        campoReading: () => cy.get('#react-select-2-listbox'),
        opcaoReading: () => cy.get('#hobbies-checkbox-2'),
        campoAnexo: () => cy.get('#uploadPicture'),
        campoEnderecoAtual: () => cy.get('#currentAddress'),
        comboState: () => cy.get('#react-select-3-input'),
        opcaoHaryana: () => cy.contains('Haryana'),
        comboCity: () => cy.get('#react-select-4-placeholder'),
        opcaoPanipat: () => cy.contains('Panipat'),
        tituloModal: () => cy.get('#example-modal-sizes-title-lg'),
        pagina: () => cy.get('body'),

    }


    

    selecionarGeneroMasculino() {
        this.elementos.opcaoGeneroMasculino().click();
    }

    clicarForaDaPagina() {
        this.elementos.pagina().click(0, 0);
    }

    selecionarGeneroFeminino() {
        this.elementos.opcaoGeneroFeminino().click();
    }

    preencherCampoTelefone(telefone) {
        this.elementos.campoTelefone().clear().type(telefone, { delay: 100 })
    }

    preencherCampoMateria(materia) {
        this.elementos.campoMateria().type(materia)
    }

    selecionarHobbieReading() {
        this.elementos.opcaoReading().click()
    }

    anexarArquivo(arquivo) {
        this.elementos.campoAnexo().selectFile(arquivo)
    }


    preencherCampoEnderecoAtual(endereco) {
        this.elementos.campoEnderecoAtual().clear().type(endereco)
    }

    clicarComboState() {
        this.elementos.comboState().click({ force: true });
    }

    selecionarStateHaryana() {
        this.elementos.opcaoHaryana().click();
    }

    clicarComboCity() {
        this.elementos.comboCity().click({ force: true });
    }

    clicarCampoReading() {
        this.elementos.campoReading().click();
    }

    selecionarCidadePanipat() {
        this.elementos.opcaoPanipat().click();
    }

    selecionarGeneroUsuario() {
        if (usuario.genero == 'male') {
            this.selecionarGeneroMasculino();
        }
        else {
            this.selecionarGeneroFeminino();
        }
    }

    ValidarSemodalEstaComMensagemEsperada() {
        this.elementos.tituloModal().should("have.text", "Thanks for submitting the form")
            .should("be.visible");
    }

    validarSeModalFoiOculto() {
        this.elementos.tituloModal()
            .should("not.exist");
    }

}

export default new formsPage()