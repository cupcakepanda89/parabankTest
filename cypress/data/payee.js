import faker from 'faker';

const fakePayee = () => {
	return {
		name: faker.name.firstName(),
		address: faker.address.streetAddress(),
		city: faker.address.city(),
		state: faker.address.state(),
		zip: faker.address.zipCode(),
		phone: faker.phone.phoneNumberFormat(),
		accountNumber: faker.random.number(10000, 99999)
	};
};

export default fakePayee;
