describe('WebDriverIO Selectors test', ()=> {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Click Account link', () => {
        browser.pause(1000);
        $('a=Accounts').click();
    });
    it('Get placeholder value', () => {
        browser.pause(1000);
        let zipPlaceholder = $('#zipcode1').getAttribute('placeholder');
        console.log(zipPlaceholder);
    });
    it('Get CSS font property', () => {
        browser.pause(1000);
        let zipCSSFont = $('#zipcode1').getCSSProperty('font-size');
        console.log(zipCSSFont);
        expect(zipCSSFont.value).toMatch('16px');
    });
});