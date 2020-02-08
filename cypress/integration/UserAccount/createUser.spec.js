import fakeUser from '../../data/users';
import UserAccount from '../../pageObject/UserAccount';

const account = new UserAccount();
const url = 'https://parabank.parasoft.com';
let customer = fakeUser();

describe('Open New Account Test', function() {
	beforeEach(() => {
		cy.visit('https://parabank.parasoft.com/parabank/logout.htm');
	});

	context('Register a New User Account', function() {
		it('Register Account by Filling in All Fields', function() {
			cy.visit(url);
			account.accountAction('Register');
			account.register(customer);

			cy.get('div#leftPanel')
				.find('p.smallText')
				.should('have.text', `Welcome ${customer.firstName} ${customer.lastName}`);
		});
	});

	context('Login Account', function() {
		it('Login Account Test', function() {
			cy.visit(url);
			account.login(customer);

			cy.get('div#leftPanel')
				.find('p.smallText')
				.should('have.text', `Welcome ${customer.firstName} ${customer.lastName}`);
		});
	});

	context('Logout Account', function() {
		it('Logout Account Test', function() {
			cy.visit(url);
			account.login(customer);
			account.accountAction('Log Out');
		});
	});
});
