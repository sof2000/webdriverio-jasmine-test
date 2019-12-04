describe('WebDriverIO State Commands test', ()=> {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Click Accounts link', () => {
        browser.pause(1000);
        $('a=Accounts').click();
    });
    it('Validate input field is Existing', () => {
        expect($('#zipcode1').isExisting()).toBe(true);
        browser.pause(2000);
    });
    it('Validate input field is Displayed', () => {
        expect($('#zipcode1').isDisplayed()).toBe(true);
        browser.pause(2000);
    });
    it('Validate input field is Clickable', () => {
        expect($('#zipcode1').isClickable()).toBe(true);
        browser.pause(2000);
    });
    it('Set value into input field', () => {
        $('#zipcode1').setValue('TEST VALUE');
    });
    it('Go button is Clickable', () => {
        expect($('#gozip').isClickable()).toBe(true);
        browser.pause(2000);
    });
    it('Go button click', () => {
        $('#gozip').click();
        browser.pause(2000);
    });
    it('Checkbox Checking is Selected', () => {
        $('#checking').click();
        expect($('#checking').isSelected()).toBe(true);
        browser.pause(2000);
    });
});