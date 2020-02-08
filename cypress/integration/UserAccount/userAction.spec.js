import fakeUser from '../../data/users';
import fakePayee from '../../data/payee';
import UserAccount from '../../pageObject/UserAccount';

const account = new UserAccount();
const url = 'https://parabank.parasoft.com';
let customer = fakeUser();
let payee = fakePayee();

describe('User Actions Test', function() {
	before('Create an Account', () => {
		cy.visit(url);
		account.accountAction('Register');
		account.register(customer);
		account.accountAction('Log Out');
	});

	beforeEach('Login', () => {
		cy.visit(url);
		account.login(customer);
		// cy.get('[name="username"]').type('Obie0');
		// cy.get('[name="password"]').type('123456');
		// cy.get('input.button').contains('Log In').click();
	});

	context('User Account Action to Transfer Funds', function() {
		it('Transfer Funds Test with Positive Amount', function() {
			account.accountAction('Transfer Funds');
			cy.wait(1000);

			account.transferFund(50);
			cy.get('h1.title').should('have.text', 'Transfer Complete!');
		});

		it('Transfer Funds Test with Negative Amount', function() {
			account.accountAction('Transfer Funds');
			cy.wait(1000);

			account.transferFund(-50);
			cy.get('h1.title').should('have.text', 'Transfer Complete!');
		});

		it('Transfer Funds Test with Special Character and Number', function() {
			account.accountAction('Transfer Funds');
			cy.wait(1000);

			account.transferFund('&50');
			cy.get('p[id="amount.errors"]').should('have.class', 'error');
			cy.get('p[id="amount.errors"]').invoke('text').then((value) => {
				let text = value.trim();
				expect(text).to.eq('Please enter a valid amount.');
			});
		});

		it('Transfer Funds Test with Emty String', function() {
			account.accountAction('Transfer Funds');
			cy.wait(1000);

			account.transferFund(' ');
			cy.get('p[id="amount.errors"]').should('have.class', 'error');
			cy.get('p[id="amount.errors"]').invoke('text').then((value) => {
				let text = value.trim();
				expect(text).to.eq('The amount cannot be empty.');
			});
		});
	});

	context('User Account Action to view Accounts Overview ', function() {
		it('Accounts Overview Test', function() {
			account.accountAction('Accounts Overview');
			cy.get('div[ng-if="showOverview"]').find('h1.title').should('have.text', 'Accounts Overview');
		});
	});

	context('User Account Action to Bill Pay', function() {
		it('Bill Pay Test', function() {
			account.accountAction('Bill Pay');
			account.payBill(payee, 50);
			cy.get('div[ng-show="showResult"]').find('h1.title').should('have.text', 'Bill Payment Complete');
		});
	});

	context('User Account Action to Find Transaction By Amount', function() {
		it('Find Transaction By Amount Test', function() {
			account.accountAction('Find Transactions');
			account.findTransactionByAmount(50);

			cy.get('div[ng-if="showResult"]').find('h1.title').should('have.text', 'Transaction Results');
		});
	});
});
