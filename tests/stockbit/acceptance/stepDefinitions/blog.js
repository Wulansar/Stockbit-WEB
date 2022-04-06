const {When, Then} = require('@cucumber/cucumber')
const blog = require('../pageobject/blog.stockbit.page')

When('User click "Blog" page on Stockbit homepage', async () => {
  await blog.gotoBlog();
  });

Then('User validate "Blog" pages', async () => {
  await blog.address();
  });
