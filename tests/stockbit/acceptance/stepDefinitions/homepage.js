const {Given, When, Then} = require('@cucumber/cucumber')
const homepage = require('../pageobject/homepage.stockbit.page')

Given('User on Stockbit.com homepage', async function () {
    await homepage.goToStockbit();
})

When(/^User click "([^"]*)" category on Stockbit homepage$/, async (section) => {
  await homepage.clickMenu(section);
  });

When('User looking for content', async () => {
  await homepage.scrollAll();
  });

Then(/^User success to "([^"]*)" menu on Stockbit Menu$/, async (section) => {
  await homepage.validateMenu(section)
  });

Then('User get all the content', async () => {
  await homepage.validateScrollAll();
  });
