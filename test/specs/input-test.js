describe('WebDriverIO Input test', ()=> {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Click Accounts link', () => {
        browser.pause(1000);
        $('a=Accounts').click();
    });
    it('Set value into input field', () => {
        $('#zipcode1').setValue('TEST VALUE');
    });
    it('Add value into input field', () => {
        $('#zipcode1').addValue('TEST VALUE 2');
        browser.pause(5000);
    });
    it('Clear input field', () => {
        browser.pause(1000);
        $('#zipcode1').clearValue();
        browser.pause(5000);
    });
});