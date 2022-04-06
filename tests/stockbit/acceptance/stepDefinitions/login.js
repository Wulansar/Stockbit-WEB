const {Then} = require('@cucumber/cucumber')
const login = require('../pageobject/login.stockbit.page')

Then('User validate "Log In" page', async () => {
  await login.valEmail();
  await login.valPass();
  await login.valSubmits();
  });
