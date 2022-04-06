/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")

//launch url
const informasiPerusahaan = ('//*[@id="tentang-kami"]/div[1]/div[2]/h3');
const timeLine = ('//*[@id="tentang-kami"]/div[1]/div[1]/div[@class="history-point"]');

const AboutUs = function abtus() {
  this.valHeader = async () => {
    const iPerusahaan = await page.locator(informasiPerusahaan);
    await expect(iPerusahaan).toBeVisible();
    await expect.soft(iPerusahaan).toHaveText('Informasi Perusahaan');
  };

  this.timelineStep = async () => {
    const btimeLine = await page.locator(timeLine);
    const tLine = await btimeLine.count();
    expect(tLine).toEqual(5);
  };

};

module.exports = new AboutUs();
