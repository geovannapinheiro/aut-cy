import EnderecoPage from '../../../support/page-objects/endereco.page'
const dadosEndereco = require('../../../fixtures/endereco.json')
describe('Funcionalidade Endereços - Faturamente e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            //Login com comando customizado e fixture
            cy.login(dados.usuario, dados.senha)    
        })
        
});

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Geovanna', 'Pinheiro', 'Google', 'Brasil', 'Av. Sagitário', '2001', 'São Paulo', 'São Paulo', '06454543', '987653223', 'ebac@email.com')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
    });


    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome, 
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa, 
            dadosEndereco[2].pais,
            dadosEndereco[2].endereco, 
            dadosEndereco[2].numero,
            dadosEndereco[2].cidade, 
            dadosEndereco[2].estado,
            dadosEndereco[2].cep, 
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
            )
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso')
    });
});