// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  // Give failing tests 3 retry attempts
  retries: 3,
};

module.exports = config;
