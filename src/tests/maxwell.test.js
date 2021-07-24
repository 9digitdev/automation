
const { getEmailAddress, applicationPageEmailAddress } = require('../models/maxwell')
let emailAddress = "";
let loadAppPageEmailAddress = "";

jest.setTimeout(40 * 1000)

describe("SNAP | Mortgages made easy", () => {
  it("Test 1: The page displays an email address for the Lender", async () => {
    await page.goto("https://snap.modernemortgage.com/home/mobile-test");

    expect(await page.title()).toBe('SNAP | Mortgages made easy');

    // assert email address exists
    expect(await page.isVisible('body > div:nth-child(2) > div > div.second-column.row > div > div > div.loan-officer-contact-wrapper'));
    

    emailAddress = await getEmailAddress(page);
    console.log("email address: ", emailAddress );

  })
  it("Test 2: should displays the same email address as in Test 1", async () => {

    console.log("original email address: ", emailAddress );
    await page.click("body > div:nth-child(2) > div > div.landing-page-row.first-column.row > div > div > div.organization-call-to-action-wrapper > a");
    expect(page.url()).toMatch(/modernemortgage\.com\/loan_applications/)

    loadAppPageEmailAddress = await applicationPageEmailAddress(page);
    console.log("loan app page email address: ", loadAppPageEmailAddress );

    expect(emailAddress == loadAppPageEmailAddress);

    

  })
})