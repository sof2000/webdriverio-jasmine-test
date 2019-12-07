var title;

describe('demo.asteriag.com landing page title validation', () => {
    it('Navigate to URL', () => {
        browser.url('http://demo.asteriag.com');
    });
    it('Validate title', () => {
        title = browser.getTitle();
        expect(title).toBe('Asteria Bank – We Test For Better Software');
    });
    it('Image validation', () => {
        const image = $('#wp-custom-header>img');
        expect(image.isExisting()).toBe(true);
    });
    it('Accounts link Text validation', () => {
        const accountsElementText = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        expect(accountsElementText.getText()).toMatch('Accounts');
    });
})