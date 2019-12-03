describe('WebDriverIO Selectors test', ()=> {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Validate Elements Selector', () => {
        const elements = $$('.menu-main-menu-container>ul>li>a');
        console.log('Elements length = ' + elements.length);
        elements.forEach( element => {
            console.log(element.getText());
        })
    });
});