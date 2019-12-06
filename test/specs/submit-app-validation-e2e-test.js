const menuLinksText = [
    "Accounts",
    "Business",
    "Loans",
    "Credit Cards",
    "Deposit",
    "Enroll"
]

describe('demo.asteria.com submit application e2e test', () => {

    it('Launch website', () => {
        browser.url('http://demo.asteriag.com');
    });

    it('Landing page validation', () => {
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

    it('Click Accounts link', () => {

        const accountsElement = $('a=Accounts');
        accountsElement.click();
    })

    it('Validate Accounts page', () => {

        const pageTitleElement = $("h1[class='entry-title']");
        const actualTitle = pageTitleElement.getText(); 
        const expectedTitle = "ACCOUNTS";
        expect(actualTitle).toMatch(expectedTitle);

        const fieldLabelElement = $('article>div>p:nth-child(1)');
        const actualLabelText = fieldLabelElement.getText();
        const expectedLabelText = 'Please, Enter your Zip Code:';
        expect(actualLabelText).toMatch(expectedLabelText);

        const inputFieldElement = $('#zipcode1');
        expect(inputFieldElement.isExisting()).toBe(true);
        const actualPlaceholderAccountsText = inputFieldElement.getAttribute('placeholder');
        const expectedPlaceholderAccountsText = 'Zip Code';
        expect(actualPlaceholderAccountsText).toMatch(expectedPlaceholderAccountsText);

        inputFieldElement.setValue('80111');

        const goButtonElement = $('#gozip');
        expect(goButtonElement.isExisting()).toBe(true);
        const actualGoButtonText = goButtonElement.getText();
        const expectedGoButtonText = 'GO';
        expect(actualGoButtonText).toMatch(expectedGoButtonText);

        goButtonElement.click();

    })
    it('Choose Account Type page Validation', () => {

        const pageTitleElement = $("h1[class='entry-title']");
        const actualTitle = pageTitleElement.getText(); 
        const expectedTitle = "CHOOSE ACCOUNT TYPE";
        expect(actualTitle).toMatch(expectedTitle);

        const checkingAccountCheckboxElement = $('#checking');
        expect(checkingAccountCheckboxElement.isExisting()).toBe(true);

        const checkingAccountCheckboxLabelElement = $("label[for='checking']");
        const actualCheckingAccountCheckboxLabelText = checkingAccountCheckboxLabelElement.getText();
        const expectedCheckingAccountCheckboxLabelText = 'Checking Account';
        expect(actualCheckingAccountCheckboxLabelText).toMatch(expectedCheckingAccountCheckboxLabelText);


        const savingsAccountCheckboxElement = $('#savings');
        expect(savingsAccountCheckboxElement.isExisting()).toBe(true);

        const savingsAccountCheckboxLabelElement = $("label[for='savings']");
        const actualSavingsAccountCheckboxLabelText = savingsAccountCheckboxLabelElement.getText();
        const expectedSavingsAccountCheckboxLabelText = 'Savings Account';
        expect(actualSavingsAccountCheckboxLabelText).toMatch(expectedSavingsAccountCheckboxLabelText);

        const checkingAndSavingsAccountCheckbox = $('#checkingsavings');
        expect(checkingAndSavingsAccountCheckbox.isExisting()).toBe(true);

        const checkingAndSavingsAccountCheckboxLabelElement = $("label[for='checkingsavings']");
        const actualCheckingAndSavingsAccountCheckboxLabelText = checkingAndSavingsAccountCheckboxLabelElement.getText();
        const expectedCheckingAndSavingsAccountCheckboxLabelText = 'Checking and Savings Accounts';
        expect(actualCheckingAndSavingsAccountCheckboxLabelText).toMatch(expectedCheckingAndSavingsAccountCheckboxLabelText);

        checkingAndSavingsAccountCheckbox.click();

        const openAccountElement = $('#openaccount');
        expect(openAccountElement.isExisting()).toBe(true);
        const actualOpenAccountText = openAccountElement.getText();
        const expectedOpenAccountText = 'Open Account';
        expect(actualOpenAccountText).toMatch(expectedOpenAccountText);

        openAccountElement.click();

    })

    it('Validate Before you Apply Page', () => {

        const pageTitleElement = $("h1[class='entry-title']");
        const actualTitle = pageTitleElement.getText(); 
        const expectedTitle = "BEFORE YOU APPLY";
        expect(actualTitle).toMatch(expectedTitle);

        const pageContentElement = $('.entry-content>p');
        const actualContentText = pageContentElement.getText();
        const expectedContentText = 'Add a Savings Plus® account to your account?';
        expect(actualContentText).toMatch(expectedContentText);

        const yesCheckboxElement = $('#savingplusyes');
        expect(yesCheckboxElement.isExisting()).toBe(true);

        const yesCheckboxLabelElement = $("label[for='savingplusyes']");
        expect(yesCheckboxLabelElement.isExisting()).toBe(true);
        const actualYesLabelText = yesCheckboxLabelElement.getText();
        const expectedYesLabelText = 'YES';
        expect(actualYesLabelText).toMatch(expectedYesLabelText);


        const noCheckboxElement = $('#savingplusno');
        expect(noCheckboxElement.isExisting()).toBe(true);

        const noCheckboxLabelElement = $("label[for='savingplusno']");
        expect(noCheckboxLabelElement.isExisting()).toBe(true);
        const actualNOLabelText = noCheckboxLabelElement.getText();
        const expectedNOLabelText = 'NO';
        expect(actualNOLabelText).toMatch(expectedNOLabelText);

        noCheckboxElement.click();

        const goToApplicationElement = $('#gotoapplication');
        expect(goToApplicationElement.isExisting()).toBe(true);

        const actualGoTOApplicationText = goToApplicationElement.getText();
        const expectedGoTOApplicationText = 'Go to Application';
        expect(actualGoTOApplicationText).toMatch(expectedGoTOApplicationText);

        goToApplicationElement.click();
    })
    it('Validation Application page Validation', () => {
        const firstNameFieldElement = $('#firstname');
        expect(firstNameFieldElement.isExisting()).toBe(true);
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
    it('Validation Account SETUP page Validation', () => {

        const pageTitleElement = $("h1[class='entry-title']");
        const actualTitle = pageTitleElement.getText(); 
        const expectedTitle = "ACCOUNT SETUP";
        expect(actualTitle).toMatch(expectedTitle);


       const inputFieldLabelSetupElement = $('article>div>p:nth-child(1)');
       expect(inputFieldLabelSetupElement.isExisting()).toBe(true);

       const actualLabelSetupText = inputFieldLabelSetupElement.getText();
       const expectedLabelSetupText = 'Please provide your SSN:';
       expect(actualLabelSetupText).toMatch(expectedLabelSetupText);


        const ssnFieldElement = $('#ssn');
        expect(ssnFieldElement.isExisting()).toBe(true);
        
        const actualSSNFieldText = ssnFieldElement.getAttribute('placeholder');
        const expectedSSNFieldText = 'SSN';
        expect(actualSSNFieldText).toMatch(expectedSSNFieldText);

        ssnFieldElement.setValue('4567789');

        const submitButtonElement = $('#submit');
        expect(submitButtonElement.isExisting()).toBe(true);

        const actualSubmitText = submitButtonElement.getText();
        const expectedSubmitText = 'Submit';
        expect(actualSubmitText).toMatch(expectedSubmitText);

        submitButtonElement.click();
    })
    it('Validation Confirmation page Validation', () => {

        const pageTitleElement = $("h1[class='entry-title']");
        const actualTitle = pageTitleElement.getText(); 
        const expectedTitle = "CONFIRMATION";
        expect(actualTitle).toMatch(expectedTitle);
    
        const submitMessageElement = $('article>div>p:nth-child(1)');
        const expectedText = 'Your application was submitted successfully.';
        const actualText = submitMessageElement.getText();
        expect(actualText).toMatch(expectedText);

    })
})