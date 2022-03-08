describe('Funcionalidade Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            //.eq(3)
            //.last()
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });


    it('Deve adicionar produto ao carrinho', () => {
        var qtde = 3;
        
        //Procurando produto
        cy.get('[class="product-block grid"]')
        // .first()
        //.eq(3)
        //.last()
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()

        //Selecionando preferências
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(qtde)

        //Adicionando ao carrinho e validando preferências
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items')

        //Verificando carrinho
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtde)
        cy.get('.woocommerce-message').should('contain', qtde + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

        });

        it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
            cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Red', 3)
        });

});