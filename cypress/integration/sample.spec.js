// describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(false)
//     })
//   });

describe('My First Test', function() {
   
    it('Login https://parabank.parasoft.com/', function() {
    
      cy.visit('https://parabank.parasoft.com/')
      let username = cy.get('[name="username"]');
      let password = cy.get('[name="password"]');
      let login = cy.get('input.button').contains('Log In');

      cy.get('[name="username"]').type('katetest1');
      cy.get('[name="password"]').type('123456');
      cy.get('input.button').contains('Log In').click();
  
      cy.contains('Welcome Kate Test1')
    })
  })