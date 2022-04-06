const {Then} = require('@cucumber/cucumber')
const protools = require('../pageobject/protools.stockbit.page')

Then('User success validate to "Pro Tools" menu in Pro Tools Menu', async () => {
  await protools.validateRekening();
  await protools.lapKeuangan();
  await protools.rasioFundamental();
  await protools.compareData();
  await protools.cariSaham();
  await protools.compareData();
  await protools.fiturChart();
  await protools.notifReal();
  await protools.sahamBulan();
  await protools.rangkuman();
  await protools.dataEmiten();
  });
