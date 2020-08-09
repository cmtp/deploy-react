describe('MY First React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Visits React App', () => {
    cy.contains('Bienvenidos a React');
  });

  it('Visits post page', () => {
    cy.contains('New Post').click();
    cy.url().should('include', '/post');
  });

  it('Send Form', () => {
    cy.contains('New Post').click();

    cy.get('#title').type('Hello this is my first post');
    cy.get('#description').type('lorem ipsum');
    cy.get('#user').type('66907a5e-9299-4d9b-989f-c0934bdb1ca5');

    cy.get('button[type="submit"]').click();

    cy.get('h1').should('have.text', 'Posts Recientes');
    // cy.get('.HomeListItem:last-child').find('.card .card-title').should('have.text', 'Hello this is my first post');
  });
});
