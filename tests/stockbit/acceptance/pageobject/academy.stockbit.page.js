/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")
const url = process.env.ACADEMY;

const icon = ('//*[@id="root"]/div/main/div/section/div[1]/div');
const header = ('//*[@id="root"]/div/main/div/section/div[1]/h1');

const ACADEMY = function academy() {
  
  this.goToAcademy = async () => {
    await page.goto(url)
  }

  this.icon = async () => {
    const icons = await page.locator(icon);
    await expect(icons).toBeVisible();
  };

  this.title = async () => {
    const headers = await page.locator(header);
    await expect(headers).toBeVisible();
    await expect.soft(headers).toHaveText('Belajar investasi saham dari 0 dan GRATIS');
  };
};

module.exports = new ACADEMY();
