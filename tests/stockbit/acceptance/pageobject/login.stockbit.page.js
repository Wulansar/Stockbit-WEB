/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")


const fillEmail = ('//*[@id="form-login"]/div[1]/label[1]');
const fillPassword = ('//*[@id="form-login"]/div[1]/label[2]');
const btnSubmit = ('//*[@id="loginbutton"]')

const LOGIN = function logins() {
  this.valEmail = async () => {
    const fillEmails = await page.locator(fillEmail);
    await expect(fillEmails).toBeVisible();
    await expect.soft(fillEmails).toHaveText('E-mail dan Username');
  };

  this.valPass = async () => {
    const fillPasswords = await page.locator(fillPassword);
    await expect(fillPasswords).toBeVisible();
    await expect.soft(fillPasswords).toHaveText('Password');
  };

  this.valSubmits = async () => {
    const btnSbmt = await page.locator(btnSubmit);
    await expect(btnSbmt).toBeVisible();
  };
};

module.exports = new LOGIN();
