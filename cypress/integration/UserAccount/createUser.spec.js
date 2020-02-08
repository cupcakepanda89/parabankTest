import fakeUser from '../../data/users';
import UserAccount from '../../pageObject/UserAccount';

const account = new UserAccount();
const url = 'https://parabank.parasoft.com';
let customer = fakeUser();

describe('Open New Account, Login and Logout Test', function() {
	beforeEach(() => {
		cy.visit('https://parabank.parasoft.com/parabank/logout.htm');
	});

	context('Register a New User Account', function() {
		it('Successfull Register Account by Filling in All Fields', function() {
			cy.visit(url);
			account.accountAction('Register');
			account.register(customer);

			cy.get('div#leftPanel')
				.find('p.smallText')
				.should('have.text', `Welcome ${customer.firstName} ${customer.lastName}`);
		});

		it('Unsuccessfull Register Account but Not Filling Any Information with Error', function() {
			cy.visit(url);
			account.accountAction('Register');
			cy.get(account.btn).contains(account.registerBtn).click();
			cy.get('.error').should('be.visible');
		});
	});

	context('Login Account', function() {
		it('Successfull Login Account with Correct Information', function() {
			cy.visit(url);
			account.login(customer);

			cy.get('div#leftPanel')
				.find('p.smallText')
				.should('have.text', `Welcome ${customer.firstName} ${customer.lastName}`);
		});

		it('Unsuccessfull Login Account without Username and Password', function() {
			cy.visit(url);
			cy.get(account.btn).contains(account.loginBtn).click();
			cy.get('.error').should('be.visible');
		});

		it('Unsuccessfull Login Account with Incorrect Username and Password', function() {
			let user = {
				username : 'random',
				password: 'random'
			};
			cy.visit(url);
			account.login(user);
			cy.get('.error').should('be.visible');
		});
	});

	context('Logout Account', function() {
		it('Successfull Logout Account Test', function() {
			cy.visit(url);
			account.login(customer);
			account.accountAction('Log Out');
			cy.get('div#leftPanel')
				.find('h2')
				.should('have.text','Customer Login');
		});
	});
});
