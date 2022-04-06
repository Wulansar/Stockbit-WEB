const {Then} = require('@cucumber/cucumber')
const about = require('../pageobject/aboutUs.stockbit.page')

Then('User success validate to "About Us" menu in About Us', async () => {
  await about.valHeader();
  await about.timelineStep();
  });
