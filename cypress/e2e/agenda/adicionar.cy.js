/// <reference types="cypress" />

describe('Teste de funcionalidade de adicionar contato', () => {
  
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })
  
  it('Pagina renderizou corretamente', () => {
    cy.get('input').should('have.length', 3)
  })
  
  it('Deve preencher os campos', () => {
    
    cy.get('input[type="text"]').type('Vitor Santos')
    cy.get('input[type="email"]').type('vitor@email.com')
    cy.get('input[type="tel"]').type('19 938393830')

    cy.get('.contato').then(($divs) => {
      const numeroDeDivs = $divs.length
      cy.get('.adicionar').click()
      cy.wait(500)
      cy.get('.contato').should('have.length', numeroDeDivs + 1)
    })
  })
})