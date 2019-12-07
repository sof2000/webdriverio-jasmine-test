describe('demo.asteriag.com landing page', () => {
    it('Launch web site', () => {
        browser.url('http://demo.asteriag.com/');
        console.log('This is Launch web site console log ...');
    });
    it('Title validation', () => {
        const title = browser.getTitle();
        expect(title).toBe('Asteria Bank – We Test For Better Software');

    });
    it('Image validation', () => {
        const image = $('#wp-custom-header>img');
        expect(image.isExisting()).toBe(true);
    });
    it('Accounts link validation', () => {
        const accountsElement = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        expect(accountsElement.isExisting()).toBe(true);
    });
    it('Accounts link Text validation', () => {
        const accountsElementText = $('.menu-main-menu-container>ul>li:nth-child(1)>a');
        expect(accountsElementText.getText()).toMatch('Accounts');
    });

    it('Business link validation', () => {
        const businessElement = $('.menu-main-menu-container>ul>li:nth-child(2)>a');
        expect(businessElement.isExisting()).toBe(true);
    });
    it('Business link Text validation', () => {
        const businessElementText = $('.menu-main-menu-container>ul>li:nth-child(2)>a');
        expect(businessElementText.getText()).toMatch('Business');
    });

    it('Loans link validation', () => {
        const loansElement = $('.menu-main-menu-container>ul>li:nth-child(3)>a');
        expect(loansElement.isExisting()).toBe(true);
    });
    it('Loans link Text validation', () => {
        const loansElementText = $('.menu-main-menu-container>ul>li:nth-child(3)>a');
        expect(loansElementText.getText()).toMatch('Loans');
    });

    it('Credit Cards link validation', () => {
        const ccElement = $('.menu-main-menu-container>ul>li:nth-child(4)>a');
        expect(ccElement.isExisting()).toBe(true);
    });
    it('Credit Cards link Text validation', () => {
        const ccElementText = $('.menu-main-menu-container>ul>li:nth-child(4)>a');
        expect(ccElementText.getText()).toMatch('Credit Cards');
    });
    
    it('Deposit link validation', () => {
        const depositElement = $('.menu-main-menu-container>ul>li:nth-child(5)>a');
        expect(depositElement.isExisting()).toBe(true);
    });
    it('Deposit link Text validation', () => {
        const depositElementText = $('.menu-main-menu-container>ul>li:nth-child(5)>a');
        expect(depositElementText.getText()).toMatch('Deposit');
    });

    it('Enroll link validation', () => {
        const enrollElement = $('.menu-main-menu-container>ul>li:nth-child(6)>a');
        expect(enrollElement.isExisting()).toBe(true);
    });
    it('Enroll link Text validation', () => {
        const enrollElementText = $('.menu-main-menu-container>ul>li:nth-child(6)>a');
        expect(enrollElementText.getText()).toMatch('Enroll');
    });
    it('Arrow down validation', () => {
        const arrowElement = $('.menu-scroll-down');
        expect(arrowElement.isClickable()).toBe(true);
    });
})