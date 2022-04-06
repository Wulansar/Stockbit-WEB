const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium, firefox } = require("playwright");

setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
    const properties = {
        headless: false,
        slowMo: 1000,
    }

    if (process.env.BROWSER == 'chrome') {
        global.browser = await chromium.launch(properties);
    } else if (process.env.BROWSER == 'firefox') {
        global.browser = await firefox.launch(properties);
    }
});

// close the browser
AfterAll(async function () {
    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
    await global.page.close();
    await global.context.close();
});
