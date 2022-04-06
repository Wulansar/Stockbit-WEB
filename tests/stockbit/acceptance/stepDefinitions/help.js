const {When, Then} = require('@cucumber/cucumber')
const help = require('../pageobject/help.stockbit.page')

When('User click "Help" page on Stockbit homepage', async () => {
  await help.goHelp();
  });

Then('User validate "Help" pages', async () => {
  await help.address();
  });
