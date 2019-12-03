describe('WebDriverIO Selectors test', ()=> {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Validate CSS Selector', () => {
        $('.men-main-menu-container>ul>li:nth-child(1)>a').isExisting();
    });
    it('Validate Link Text Selector', () => {
        $('=Accounts').isExisting();
    });
    it('Validate Partial Link Text Selector', () => {
        $('*=Account').isExisting();
    });
    it('Validate XPath with contains Selector', () => {
        $("//a[contains(text(),'Accounts')]").isExisting();
    });
    it('Click Accounts Link', () => {
        $("//a[contains(text(),'Accounts')]").click();
    });
    it('Validate class name and text Selector', () => {
        $(".entry-title=Accounts").isExisting();
    });
    it('Validate XPath Selector', () => {
        $("//header/h1[1]").isExisting();
    });
} )