class interactionsPage {


    elementos = {
        janelaDeItens: () => cy.get('.vertical-list-container'),
        listaDeItens: () => cy.get('#demo-tabpane-list .list-group-item'),
    }

    validarSeListaDeItensEstaVisivel() {
        this.elementos.janelaDeItens().should('be.visible');
    }

    ordernarItensEmOrdemDecrescente() {
      const primeiraPosicao = '.list-group-item:first';
      this.elementos.listaDeItens().then(() => {
      cy.contains('Six').drag(primeiraPosicao);
      cy.contains('Five').drag(primeiraPosicao);
      cy.contains('Four').drag(primeiraPosicao);
      cy.contains('Three').drag(primeiraPosicao);
      cy.contains('Two').drag(primeiraPosicao);
      cy.contains('One').drag(primeiraPosicao);

    });
    }

    validarSeListaFoiOrdenada() {
      this.elementos.listaDeItens().then(($items) => {
      const texts = [...$items].map(el => el.innerText.trim());
      expect(texts).to.deep.equal([
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six'
      ]);
    });
    }


}

export default new interactionsPage()