/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")
const url = process.env.HELP;

const HELP = function help() {
  
  this.goHelp = async () => {
    await page.goto(url)
  }

  this.address = async () => {
    await expect(page).toHaveURL(/.*help/);
  };
};

module.exports = new HELP();
