const { chromium } = require('playwright');
const browser = await chromium.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page.goto('https://snap.modernemortgage.com/home/mobile-test')

await page.setViewportSize({ width: 1440, height: 711 })

await navigationPromise
console.log("page title", await page.title());
await page.waitForSelector('.team-info-wrapper > .loan-officer-contact-wrapper > .loan-officer-contact-item:nth-child(3) > .text--base > a');
const emailAddress = await page.innerText('.team-info-wrapper > .loan-officer-contact-wrapper > .loan-officer-contact-item:nth-child(3) > .text--base > a' );

console.log("email address: ", await page.innerText('.team-info-wrapper > .loan-officer-contact-wrapper > .loan-officer-contact-item:nth-child(3) > .text--base > a' ));
console.log("email address: ", emailAddress);
// await page.click('.team-info-wrapper > .loan-officer-contact-wrapper > .loan-officer-contact-item:nth-child(3) > .text--base > a')

// await page.waitForSelector('.landing-page-row > .col > .organization-info-wrapper > .organization-call-to-action-wrapper > .btn')
// await page.click('.landing-page-row > .col > .organization-info-wrapper > .organization-call-to-action-wrapper > .btn')

// await navigationPromise

// await page.waitForSelector('.left-column > .contact-row:nth-child(6) > .align-self-center > .text--base > a')
// await page.click('.left-column > .contact-row:nth-child(6) > .align-self-center > .text--base > a')


await browser.close()