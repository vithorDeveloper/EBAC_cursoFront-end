/// <reference types="cypress" />

describe('Teste de funcionalidade de apagar contato', () => {
  
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })
  
  it('Pagina renderizou corretamente', () => {
    cy.get('input').should('have.length', 3)
  })
  
  it('Deve apagar o contato', () => {
    cy.get('.delete').first().click()
    cy.get('.contato').then(($divs) => {
      const numeroDeDivs = $divs.length
      cy.get('.adicionar').click()
      cy.wait(500)
      cy.get('.contato').should('have.length', numeroDeDivs - 1)
    })
  })
})