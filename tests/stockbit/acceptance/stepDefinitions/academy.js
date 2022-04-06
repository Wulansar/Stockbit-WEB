const {When, Then} = require('@cucumber/cucumber')
const academy = require('../pageobject/academy.stockbit.page')

When('User click "Academy" page on Stockbit homepage', async () => {
  await academy.goToAcademy();
  });

Then('User validate "Academy" pages', async () => {
  await academy.icon();
  await academy.title();
  });
