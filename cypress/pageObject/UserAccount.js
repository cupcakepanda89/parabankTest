class UserAccount {
	constructor() {
		// Login Variables
		this.username = 'input[name="username"]';
		this.password = 'input[name="password"]';
		this.btn = 'input.button';
		this.loginBtn = 'Log In';
		// Registration Variables
		this.firstName = 'input[name="customer.firstName"]';
		this.lastName = 'input[name="customer.lastName"]';
		this.address = 'input[name="customer.address.street"]';
		this.city = 'input[name="customer.address.city"]';
		this.state = 'input[name="customer.address.state"]';
		this.zip = 'input[name="customer.address.zipCode"]';
		this.phone = 'input[name="customer.phoneNumber"]';
		this.ssn = 'input[name="customer.ssn"]';
		this.createUsername = 'input[name="customer.username"]';
		this.createPassword = 'input[name="customer.password"]';
		this.repeatPassword = 'input[name="repeatedPassword"]';
		this.registerBtn = 'Register';

		// Transfer Funds Variables
		this.transferField = 'input#amount';
		this.trasferBtn = 'Transfer';

		// Bill Pay Variables
		this.payeeName = 'input[name="payee.name"]';
		this.payeeAddress = 'input[name="payee.address.street"]';
		this.payeeCity = 'input[name="payee.address.city"]';
		this.payeeState = 'input[name="payee.address.state"]';
		this.payeeZip = 'input[name="payee.address.zipCode"]';
		this.payeePhone = 'input[name="payee.phoneNumber"]';
		this.payeeAccountNumber = 'input[name="payee.accountNumber"]';
		this.repeatPayeeAccount = 'input[name="verifyAccount"]';
		this.payeeAmount = 'input[name="amount"]';
		this.selectAccount = 'select[name="fromAccountId"]';
		this.paymentBtn = 'Send Payment';

		// Find Transaction
		this.transactionAmountField = 'input[id="criteria.amount"]';
		this.tranctionAmountBtn = 'button[ng-click="criteria.searchType = \'AMOUNT\'"]';
	}

	login(customer) {
		cy.get(this.username).type(customer.username);
		cy.get(this.password).type(customer.password);
		cy.get(this.btn).contains(this.loginBtn).click();
	}

	logout(url) {
		cy.visit(`${url}/logout.htm`);
	}

	register(customer) {
		cy.get(this.firstName).type(customer.firstName);
		cy.get(this.lastName).type(customer.lastName);
		cy.get(this.address).type(customer.address);
		cy.get(this.city).type(customer.city);
		cy.get(this.state).type(customer.state);
		cy.get(this.zip).type(customer.zip);
		cy.get(this.phone).type(customer.phone);
		cy.get(this.ssn).type(customer.ssn);
		cy.get(this.createUsername).type(customer.username);
		cy.get(this.createPassword).type(customer.password);
		cy.get(this.repeatPassword).type(customer.password);
		cy.get(this.btn).contains(this.registerBtn).click();
	}

	/**
     * 
     * @param {String} action Log Out, Accounts Overview, Transfer Funds, Bill Pay, Find Transactions
     */
	accountAction(action) {
		cy.get('a').contains(action).click();
	}

	viewAccount() {
		cy.get('a').contains('Accounts Overview').click();
	}

	transferFund(amount) {
		cy.get(this.transferField).type(amount);
		cy.get(this.btn).contains(this.trasferBtn).click();
		cy.wait(500);
	}

	payBill(payee, amount) {
		cy.get(this.payeeName).type(payee.name);
		cy.get(this.payeeAddress).type(payee.address);
		cy.get(this.payeeCity).type(payee.city);
		cy.get(this.payeeState).type(payee.state);
		cy.get(this.payeeZip).type(payee.zip);
		cy.get(this.payeePhone).type(payee.phone);
		cy.get(this.payeeAccountNumber).type(payee.accountNumber);
		cy.get(this.repeatPayeeAccount).type(payee.accountNumber);
		cy.get(this.payeeAmount).type(amount);
		// cy.get(this.selectAccount).select();
		cy.get(this.btn).contains(this.paymentBtn).click();
	}

	findTransactionByAmount(amount) {
		cy.get(this.transactionAmountField).type(amount);
		cy.get(this.tranctionAmountBtn).click();
	}
}

export default UserAccount;
