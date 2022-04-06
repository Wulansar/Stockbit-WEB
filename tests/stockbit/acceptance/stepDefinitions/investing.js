const {Then} = require('@cucumber/cucumber')
const investing = require('../pageobject/invest.stockbit.page')

Then('User success validate to "Investing" menu in Investing Menu', async () => {
  await investing.validateRekening();
  await investing.validateFAQ();
  await investing.listFAQ();
  });
