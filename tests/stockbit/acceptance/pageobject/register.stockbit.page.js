/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")


const google = ('//*[@id="form-register"]/div/input');
const facebook = ('//*[@id="form-register"]/div/a[1]');
const email = ('//*[@id="form-register"]/div/a[2]')

const REGISTER = function registers() {
  this.valGoogle = async () => {
    const googles = await page.locator(google);
    await expect(googles).toBeVisible();
  };

  this.valFB = async () => {
    const facebooks = await page.locator(facebook);
    await expect(facebooks).toBeVisible();
  };

  this.valEmail = async () => {
    const emails = await page.locator(email);
    await expect(emails).toBeVisible();
  };
};

module.exports = new REGISTER();
