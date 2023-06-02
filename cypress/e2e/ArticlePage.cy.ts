
describe('Страница статьи БЗ', () => {
  it('подгружает блок комментариев', () => {
    // Login to your AAD tenant.
    cy.origin(
      'http://localhost:2000/login',
      {
        args: {
          password: '123',
          username: 'admin'
        }
      },
      ({ response }) => {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
    )

    cy.visit('/articles/1')
    cy.get('[data-testid="articleComments"]').then(($el) => {
      Cypress.dom.isVisible($el) // true
    })
  })
})
