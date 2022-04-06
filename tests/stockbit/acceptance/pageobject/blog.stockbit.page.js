/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")
const url = process.env.BLOG;

const ACADEMY = function academy() {
  
  this.gotoBlog = async () => {
    await page.goto(url)
  }

  this.address = async () => {
    await expect(page).toHaveURL(/.*snips/);
  };
};

module.exports = new ACADEMY();
