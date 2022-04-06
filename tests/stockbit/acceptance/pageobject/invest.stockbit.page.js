/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")


const btnBukaRekening = ('//*[@id="__next"]/div/div[2]/div/a');
const faq = ('//*[@id="__next"]/div/div[2]/div/h2');
const faqList = ('//*[@id="__next"]/div/div[2]/div/section/div/div')

const Investing = function invest() {
  this.validateRekening = async () => {
    const bRekening = await page.locator(btnBukaRekening);
    await expect(bRekening).toBeVisible();
    await expect.soft(bRekening).toHaveText('Buka Rekening Anda');
  };

  this.validateFAQ = async () => {
    const bFAQ = await page.locator(faq);
    await expect(bFAQ).toBeVisible();
    await expect.soft(bFAQ).toHaveText('Frequently Asked Questions');
  };

  this.listFAQ = async () => {
    const bFAQ = await page.locator(faqList);
    const fNq = await bFAQ.count();
    expect(fNq).toEqual(8);
  };
};

module.exports = new Investing();
