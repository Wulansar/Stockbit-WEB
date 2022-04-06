const {Then} = require('@cucumber/cucumber')
const register = require('../pageobject/register.stockbit.page')

Then('User validate "Register" page', async () => {
  await register.valGoogle();
  await register.valFB();
  await register.valEmail();
  });
