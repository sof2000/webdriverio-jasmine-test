describe('WebDriverIO Jasmine Assertions test', ()=> {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Assert', () => {
        expect($('.menu-main-menu-container>ul>li:nth-child(1)>a').isClickable()).toBe(true);
    });
    it('Assert toBeLessThan', () => {
        let e = 2;
        let pi = 3.14;
        expect(e).toBeLessThan(pi);
    });
    it('Assert toBeGreaterThan', () => {
        let e = 5;
        let pi = 3.14;
        expect(e).toBeGreaterThan(pi);
    });
    it('Assert toEqual', () => {
        let e = 3.14;
        let pi = 3.14;
        expect(e).toEqual(pi);
    });
    it('Assert toMatch', () => {
        let message = 'Test message';
        expect(message).toMatch('Test message');
    });
});