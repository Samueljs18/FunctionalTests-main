import { gerarUsuario } from '../support/faker'
import formsPage from '../pages/formsPage';
import formsPageDefault from '../pages/formsPageDefault';
import alertsFramePage from '../pages/alertsFramePage';
import webTablesPage from '../pages/webTablesPage';
import widgetPage from '../pages/widgetPage';
import InteractionsPage from '../pages/InteractionsPage';
const usuario = gerarUsuario();

describe('Testes Aplicação DemoQA', () => {


  beforeEach("acessar Página Inicial", () => {
    cy.visit('https://demoqa.com/')
  })

  it('Validar Practice Form', () => {
    formsPageDefault.clicarbotao('Forms');
    formsPageDefault.clicarbotao('Practice Form');
    formsPageDefault.preencherNome(usuario.nome);
    formsPageDefault.preencherCampoSobreme(usuario.sobrenome);
    formsPageDefault.preencherCampoEmail(usuario.email);
    formsPage.preencherCampoTelefone(usuario.telefone);
    formsPage.preencherCampoMateria("Computer Science");
    formsPage.clicarCampoReading();
    formsPage.selecionarGeneroUsuario();
    formsPage.selecionarHobbieReading();
    formsPage.anexarArquivo("cypress/support/file/arquivo.txt");
    formsPage.preencherCampoEnderecoAtual("Lorem ipsum");
    formsPage.clicarComboState();
    formsPage.selecionarStateHaryana();
    formsPage.clicarComboCity();
    formsPage.selecionarCidadePanipat();
    formsPageDefault.clicarBotaoSubmit();
    formsPage.ValidarSemodalEstaComMensagemEsperada();
    formsPage.clicarForaDaPagina();
    formsPage.validarSeModalFoiOculto();
  });

  it('Validar trocando contexto do navegador Brownser Windows', () => {
    formsPageDefault.clicarbotao('Alerts, Frame & Windows');
    formsPageDefault.clicarbotao('Browser Windows');
    alertsFramePage.forcarRedirecionamentoParaOutraAba();
    formsPageDefault.clicarbotao('New Window');
    alertsFramePage.ValidarSeTextoNovaPaginaEstaDeAcordoComEsperado('This is a sample page');
  })

  it('Validar Practice Form', () => {
    formsPageDefault.clicarbotao('Elements');
    formsPageDefault.clicarbotao('Web Tables');
    webTablesPage.clicarBotaoAdicionar();
    webTablesPage.preencherCamposFormulario('Claudine', 'Mertz', 'Claudine_Mertz53@hotmail.com', "22", "3500", "Qualidade");
    webTablesPage.validarSeUsuarioFoiCadastradoComSucesso();
    webTablesPage.clicarbotaoEditarUltimoRegistro();
    webTablesPage.preencherCamposFormulario("Samuel", "Silva", "samuel@teste.com", "22", "350000", "Cloud");
    webTablesPage.validarSeUsuarioFoiEditadoComSucesso();
    webTablesPage.clicarbotaoExcluirUltimoRegistro();
    webTablesPage.validarSeUsuarioFoiExcluidoComSucesso();

    /*Bônus (pontos adicionais na avaliação):
    Criar 12 novos registros de forma dinâmica através do cucumber
    Deletar todos os novos registros criados*/
    //preencherCamposFormulario(usuario.nome, usuario.sobrenome, usuario.email, "22", "350000", "Cloud"); 


  })

  it("Validar barra de loading", () => {
    formsPageDefault.clicarbotao('Widgets');
    formsPageDefault.clicarbotao('Progress Bar');
    widgetPage.clicarBotaoStartStop();
    cy.wait(1000);
    widgetPage.clicarBotaoStartStop();
    widgetPage.validarSeValorBarraRolagemMenorQue25();
    widgetPage.clicarBotaoStartStop();
    widgetPage.validarSeValorBarraRolagemIgualA(100);
    widgetPage.clicarbotaoResetar();
    widgetPage.validarSeValorBarraRolagemIgualA(0);

  })

  it.only("organizar Itens em ordem decrescente", () => {

    formsPageDefault.clicarbotao("Interactions");
    formsPageDefault.clicarbotao("Sortable");
    InteractionsPage.validarSeListaDeItensEstaVisivel();
    InteractionsPage.ordernarItensEmOrdemDecrescente();
    InteractionsPage.validarSeListaFoiOrdenada();

  })



})