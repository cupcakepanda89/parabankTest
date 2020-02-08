import faker from 'faker';

const fakeUser = () => { 
    let firstName = faker.name.firstName();
  return {
        firstName: firstName,
        lastName: faker.name.lastName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        phone: faker.phone.phoneNumberFormat(),
        ssn: faker.random.number(100,900) + '-' + faker.random.number(10,90) + '-' + faker.random.number(1000,9000),
        username: firstName + faker.random.number(1,999),
        password: '123456'

  }
};

export default fakeUser;