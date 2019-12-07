const menuLinksText = [
    "Accounts",
    "Business",
    "Loans",
    "Credit Cards",
    "Deposit",
    "Enroll"
]

function validateTextElement(selector, expectedValue) {
    const element = $(selector);
    const actualTitle = element.getText(); 
    const expectedTitle = expectedValue;
    expect(actualTitle).toMatch(expectedTitle);
}

function validatePlaceholderText(selector, expectedValue) {
    const element = $(selector);
    const actualText = element.getAttribute('placeholder');
    const expectedText = expectedValue;
    expect(actualText).toMatch(expectedText);
}

function validateElementExisting(selector) {
    const element = $(selector);
    expect(element.isExisting()).toBe(true);
}

function waitAndClick(selector, waitTime) {
    const element = $(selector);
    element.waitForExist(waitTime);
    element.click();
}

function waitAndSendKey(selector, value ,waitTime) {
    const element = $(selector);
    element.waitForExist(waitTime);
    element.setValue(value);
}

beforeAll( function() {
    browser.url('http://demo.asteriag.com');
})

afterAll( function() {
    console.log('END OF EXECUTION');
})

describe('demo.asteria.com submit application e2e test', () => {

    // it('Launch website', () => {
    //     browser.url('http://demo.asteriag.com');
    // });
    describe('Landing page test', () => {
        it('Landing page validation', () => {
            browser.navigateTo('http://demo.asteriag.com');
            const title = browser.getTitle();
            expect(title).toBe('Asteria Bank – We Test For Better Software');
            const image = $('#wp-custom-header>img');
            expect(image.isExisting()).toBe(true);
            const topMenuElement = $('#top-menu');
            expect(topMenuElement.isExisting()).toBe(true);
            // Menu links validation
            const elementsMenu = $$('.menu-main-menu-container>ul>li>a');
            var i = 0;
            elementsMenu.forEach(element => {
                expect(element.isExisting()).toBe(true);
                expect(element.getText()).toMatch(menuLinksText[i]);
                console.log(menuLinksText[i]);
                i++;
            });
    
            const arrowElement = $('.menu-scroll-down');
            expect(arrowElement.isClickable()).toBe(true);
        })
    })
    
    it('Click Accounts link', () => {
        waitAndClick('a=Accounts', 5000);
    })

    describe('Accounts page test', () => {
        it('Validate Accounts page Step 1', () => {

            browser.navigateTo('http://demo.asteriag.com/accounts/');

            validateTextElement("h1[class='entry-title']", "ACCOUNTS");

            validateTextElement('article>div>p:nth-child(1)', 'Please, Enter your Zip Code:');
        })
        it('Validate Accounts page Step 2', () => {
            
            validateElementExisting('#zipcode1');

            validatePlaceholderText('#zipcode1', 'Zip Code');
    
            waitAndSendKey('#zipcode1', '80111')

            validateElementExisting('#gozip');
            
            validateTextElement('#gozip', 'GO');

            waitAndClick('#gozip');
    
        })
    })
    describe('Choose Account page test', () => {
        it('Choose Account Type page Validation', () => {
            browser.navigateTo('http://demo.asteriag.com/choose-account-type/');

            validateTextElement("h1[class='entry-title']", "CHOOSE ACCOUNT TYPE");

            validateElementExisting('#checking');
    
            validateTextElement("label[for='checking']", 'Checking Account');

            validateElementExisting('#savings');
 
            validateTextElement("label[for='savings']", 'Savings Account');

            validateElementExisting('#checkingsavings');
    
            validateTextElement("label[for='checkingsavings']", 'Checking and Savings Accounts');

            waitAndClick('#checkingsavings');
  
            validateElementExisting('#openaccount');

            validateTextElement('#openaccount', 'Open Account');

            waitAndClick('#openaccount');
    
        })
    })
    
    describe('Before you Apply test', () => {
        it('Validate Before you Apply Page', () => {
            browser.navigateTo('http://demo.asteriag.com/before-you-apply/');

            validateTextElement("h1[class='entry-title']", "BEFORE YOU APPLY");
    
            validateTextElement('.entry-content>p', 'Add a Savings Plus® account to your account?');
    
            validateElementExisting('#savingplusyes');

            validateElementExisting("label[for='savingplusyes']");

            validateTextElement("label[for='savingplusyes']", 'YES');

            validateElementExisting('#savingplusno');
    
            validateElementExisting("label[for='savingplusno']");

            validateTextElement("label[for='savingplusno']", 'NO')
    
            waitAndClick('#savingplusno');

            validateElementExisting('#gotoapplication');
    
            validateTextElement('#gotoapplication', 'Go to Application');

            waitAndClick('#gotoapplication');
        })
    })

    describe('Application page test', () => {
        it('Validation Application page Validation', () => {
            browser.navigateTo('http://demo.asteriag.com/application/');
            const firstNameFieldElement = $('#firstname');

            validateElementExisting('#firstname');

            firstNameFieldElement.setValue('First Name');
    
            const middleNameFieldElement = $('#middlename');
            middleNameFieldElement.setValue('Middle Name');
        
            const lastNameFieldElement = $('#lastname');
            lastNameFieldElement.setValue('Last Name');
    
            const address1FieldElement = $('#address1');
            address1FieldElement.setValue('Street 1000');
    
            const address2FieldElement = $('#address2');
            address2FieldElement.setValue('Unit 100');
    
            const cityFieldElement = $('#city');
            cityFieldElement.setValue('San Jose');
    
            const stateOption2Element = $('#state>option:nth-child(2)');
            stateOption2Element.click();
    
            const zipcode2Element = $('#zipcode2');
            zipcode2Element.setValue('80111');
    
    
            const emailValue = 'test@mail.com';
            const emailFieldElement = $('#email');
            emailFieldElement.setValue(emailValue);
    
            const reEmailFieldElement = $('#reemail');
            reEmailFieldElement.setValue(emailValue);
    
            const phoneFieldElement = $('#phone');
            phoneFieldElement.setValue('3215556677')
    
            const phoneTypeOptionCellElement = $('option=Cell');
            phoneTypeOptionCellElement.click();
    
            const yesCitizenCheckboxElement = $('#citizenyes');
            yesCitizenCheckboxElement.click();
    
            const noDualCheckboxElement = $('#citizendualno');
            noDualCheckboxElement.click();
    
            const countryOptionUSAElement = $('option=USA');
            countryOptionUSAElement.click();
    
            const DOBFieldElement = $('#dateofbirth');
            DOBFieldElement.setValue('01/10/1980');
    
            const financesOptionEmploymentElement = $('option=Employment');
            financesOptionEmploymentElement.click();
    
            const continueButtonElement = $('#continueapplication');
            continueButtonElement.click();
    
        })
    })
    
    describe('Account setup page', () => {
        it('Validation Account SETUP page Validation', () => {
            browser.navigateTo('http://demo.asteriag.com/account-setup');

            validateTextElement("h1[class='entry-title']", "ACCOUNT SETUP");
    
           validateElementExisting('article>div>p:nth-child(1)');
    
            validateTextElement('article>div>p:nth-child(1)', 'Please provide your SSN:');
    
            validateElementExisting('#ssn');

            validatePlaceholderText('#ssn', 'SSN')

            waitAndSendKey('#ssn', '4567789');

            validateElementExisting('#submit');
    
            validateTextElement('#submit', 'Submit');

            waitAndClick('#submit');
        })
    })
    
    describe('Confirmation page test', () => {
        it('Validation Confirmation page Validation', () => {
            browser.navigateTo('http://demo.asteriag.com/confirmation');
            validateTextElement("h1[class='entry-title']", "CONFIRMATION");
        })

        it('Validate success message', () => {
            validateTextElement('article>div>p:nth-child(1)', 'Your application was submitted successfully.');
        })
    })
    
})