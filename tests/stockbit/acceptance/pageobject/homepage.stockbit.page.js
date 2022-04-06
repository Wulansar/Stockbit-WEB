/* global $$ */
require('dotenv').config();
const { expect } = require("@playwright/test")

//launch url
const url = process.env.WEB;
const investasi = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[1]');
const proTools = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[2]');
const academy = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[3]');
const aboutUs = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[4]');
const blog = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[5]');
const help = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/a[6]');
const signUp = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/div/div[2]/a');
const login = ('//*[@id="landing-wrapper"]/div[1]/div/div[2]/div/div[2]/div/div[1]/a');
const btnInvest = ('//*[@id="section0"]/div/div/div[1]/div/a');
const itunes =('//*[@id="section0"]/div/div/div[1]/div/div[3]/a[1]');
const android = ('//*[@id="section0"]/div/div/div[1]/div/div[3]/a[2]');
const akhir = ('//*[@id="section11"]/div/div/div/div/div/div[2]/a');

const HomePage = function homepage() {
  this.goToStockbit = async () => {
    await page.goto(url)
  };

  this.closeBanner = async () => {
    await page.locator(nanti).click()
  };

  this.clickMenu = async (section) => {
    
    switch (section) {
      case 'Investing':
        await page.locator(investasi).first().click();
        break;
      case 'Pro Tools':
        await page.locator(proTools).click();
        break;
      case 'Academy':
        await page.locator(academy).click();
        break;
      case 'About Us':
        await page.locator(aboutUs).click();
        break;
      case 'Blog':
        await page.locator(blog).click();
        break;
      case 'Help':
        await page.locator(help).click();
        break;
      case 'Log In':
        await page.locator(login).click();
        break;
      case 'Sign Up':
        await page.locator(signUp).click();
        break;    
      throw new Error('section not exist');
    }
  }

  this.validateMenu = async (section) => {
    switch (section) {
      case 'Investing':
        await expect(page).toHaveURL(/.*investasi/);
        break;
      case 'Pro Tools':
        await expect(page).toHaveURL(/.*pro-tools/);
        break;
      case 'Academy':
        await expect(page).toHaveURL(/.*stockbit/);
        break;
      case 'About Us':
        await expect(page).toHaveURL(/.*about/);
        break;
      case 'Blog':
        await expect(page).toHaveURL(/.*stockbit/);
        break;
      case 'Help':
        await expect(page).toHaveURL(/.*stockbit/);
        break;
      case 'Log In':
        await expect(page).toHaveURL(/.*stockbit/);
        break;
      case 'Sign Up':
        await expect(page).toHaveURL(/.*stockbit/);
        break;
      throw new Error('section not exist');
      }
  }

  this.scrollAll = async () => {
    const getText = await page.locator(btnInvest);
    await expect.soft(getText).toHaveText('Mulai Berinvestasi');
    const ios = await page.locator(itunes);
    await expect(ios).toBeVisible();
    const andro = await page.locator(android);
    await expect(andro).toBeVisible();
  }

  this.validateScrollAll = async () => {
    const end = await page.locator(akhir);
    await expect(end).toBeVisible();
  }
};

module.exports = new HomePage();
