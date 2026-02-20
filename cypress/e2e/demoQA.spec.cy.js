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
    formsPageDefault.acessarSite('https://demoqa.com/')
  })

  it('Validar preenchimento do formulário de forma aleatória e fechar modal', () => {
    formsPageDefault.clicarbotao('Forms');
    formsPageDefault.clicarbotao('Practice Form');
    formsPage.preencherFormulario(usuario.nome,usuario.sobrenome,usuario.email,usuario.telefone,"Computer Science","cypress/support/file/arquivo.txt","Lorem ipsum");
    formsPageDefault.clicarBotaoSubmit();
    formsPage.ValidarSemodalEstaComMensagemEsperada();
    formsPage.clicarForaDaPagina();
    formsPage.validarSeModalFoiOculto();
  });

  it('Validar interação com nova janela aberta', () => {
    formsPageDefault.clicarbotao('Alerts, Frame & Windows');
    formsPageDefault.clicarbotao('Browser Windows');
    alertsFramePage.forcarRedirecionamentoParaOutraAba();
    formsPageDefault.clicarbotao('New Window');
    alertsFramePage.ValidarSeTextoNovaPaginaEstaDeAcordoComEsperado('This is a sample page');
  })

  it('Validar interação com Tabelas', () => {
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
  })

  it("Validar teste na barra de carregamento", () => {
    formsPageDefault.clicarbotao('Widgets');
    formsPageDefault.clicarbotao('Progress Bar');
    widgetPage.clicarBotaoStartStop();
    formsPageDefault.aguardarTempo(1000);
    widgetPage.clicarBotaoStartStop();
    widgetPage.validarSeValorBarraRolagemMenorQue25();
    widgetPage.clicarBotaoStartStop();
    widgetPage.validarSeValorBarraRolagemIgualA(100);
    widgetPage.clicarbotaoResetar();
    widgetPage.validarSeValorBarraRolagemIgualA(0);

  })

  it("Validar ordenação dos botões na lista para ordem decrescente", () => {
    formsPageDefault.clicarbotao("Interactions");
    formsPageDefault.clicarbotao("Sortable");
    InteractionsPage.validarSeListaDeItensEstaVisivel();
    InteractionsPage.ordernarItensEmOrdemDecrescente();
    InteractionsPage.validarSeListaFoiOrdenada();

  })

  afterEach(()=>{
    cy.screenshot();
  })

})