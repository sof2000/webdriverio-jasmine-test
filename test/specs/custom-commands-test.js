function waitAndClick(element, waitTime) {
    $(element).waitForExist(waitTime);
    $(element).click();
}

function waitAndSendKey(element, value, waitTime) {
    $(element).waitForExist(waitTime);
    $(element).setValue(value);
}

describe('WebDriverIO Custom Commands test', ()=> {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Wait and Click', () => {
        waitAndClick('a=Accounts');
    });
    it('Wait and setValue', () => {
        waitAndSendKey('#zipcode1', 'Test');
    });
});