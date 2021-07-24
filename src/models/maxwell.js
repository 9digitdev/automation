async function getEmailAddress(page) {
    const emailAddress = await page.innerText('.team-info-wrapper > .loan-officer-contact-wrapper > .loan-officer-contact-item:nth-child(3) > .text--base > a' );
    return emailAddress;
}

async function applicationPageEmailAddress(page) {
    const emailAddress = await page.innerText('body > div:nth-child(2) > div > div > div.left-column.bg-white.col-lg-3.order-lg-1 > div:nth-child(6) > div.align-self-center.col-9 > span');
    return emailAddress;
}


module.exports = { getEmailAddress, applicationPageEmailAddress}