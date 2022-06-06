describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
    cy.findByRole('button', {name: /1/i}).click()
    cy.findByText(/^\+$/).click()
    cy.findByText(/^2$/).click()
    cy.findByText(/^=$/).click()
    cy.get('[data-testid="total"]').should('have.text', '3')
  })
})
