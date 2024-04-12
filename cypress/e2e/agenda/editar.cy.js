/// <reference types="cypress" />

describe('Teste de Funcionalidade de editar contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Pagina renderizou corretamente', () => {
    cy.get('input').should('have.length', 3)
  })
  
  it('Deve ir para o modo edição', () => {
    cy.get('.edit').first().click()
    cy.get('.alterar').should('have.length', 1)
    cy.get('.alterar').should('have.length', 1)
  })

  it('Deve altera campos',() => {
    cy.get('.edit').first().click()
    cy.get('input[type="text"]').clear().type('Bernardo')
    cy.get('input[type="email"]').clear().type('bernardo@email.com')
    cy.get('input[type="tel"]').clear().type('912345678')
    cy.get('.alterar').click()
    cy.wait(100)
    cy.get('.adicionar').should('exist')
  }) 
})