import {userBuilder} from '../support/generate'

describe('registration', () => {
  it('should register a new user', () => {
    const user = userBuilder()

    cy.visit('/')
    cy.findByText(/register/i).click()
    cy.findByLabelText(/username/i).type(user.username)
    cy.findByLabelText(/password/i).type(user.password)
    cy.findByText(/submit/i).click()
    cy.assertHome().assertLoggedInAs(user)
  })

  it(`should show an error message if there's an error registering`, () => {
    cy.intercept(
      {
        method: 'POST',
        url: 'http://localhost:3000/register',
      },
      {
        statusCode: 500,
      },
    )
    cy.visit('/register')
    cy.findByText(/submit/i).click()
    cy.findByText(/error.*try again/i)
  })
})
