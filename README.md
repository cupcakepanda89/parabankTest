# parabankTest
Test Parabank (Dummy Website) using Cypress.io Automation Test Framework

## Installation 

```
$ mkdir CypressTest
$ cd CypressTest
$ git clone https://github.com/cupcakepanda89/parabankTest.git
$ cd parabankTest

# install all dependencies
$ npm install 
```
## How to Execute Tests
#### When running it for the first time
```
npx cypress open
```
#### After that, you can use these command line
```
# to open Cypress GUI
$ npm run cy:open

# to run all spec tests
$ npm run cy:run

# to run specific spec test 
$ npm run cy:spec 'cypress/integration/UserAccount/createUser.spec.js' 

# to run with record 
### export key 
$ export CYPRESS_RECORD_KEY=35750ceb-32a1-42d1-b128-8175fb1a7f3d

### run all spec with record 
$ npx cypress run --record --key 35750ceb-32a1-42d1-b128-8175fb1a7f3d

### run specific spec with record
$ npx cypress run --record --spec 'cypress/integration/UserAccount/createUser.spec.js' 
```

## Test Structure
1. Create `pageObject` folder to store all the page class 
2. Create all spec tests under `UserAccount` folder under `integration` folder 
3. Create `data` folder to store fake data to use to create account to test 

## Test Coverage for Parabank 
Tests include positive and negative testings. 

1. `createUser.spec.js` contains 
- Open New Account Test
- User Login Test
- Logout Test
2. `userAction.spec.js` contains
- Account Overview Test
- Transfer Funds Test
- Bill Pay Test
- Find Transaction By Amount Test
