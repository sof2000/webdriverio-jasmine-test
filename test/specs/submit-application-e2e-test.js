describe('demo.asteria.com submit application e2e test', () => {
    it('Submit Application', () => {
        browser.url('http://demo.asteriag.com');
        const accountsElement = $('a=Accounts');
        accountsElement.click();

        const inputFieldElement = $('#zipcode1');
        inputFieldElement.setValue('80111');

        const goButtonElement = $('#gozip');
        goButtonElement.click();

        const checkingAndSavingsAccountCheckbox = $('#checkingsavings');
        checkingAndSavingsAccountCheckbox.click();

        const openAccountElement = $('#openaccount');
        openAccountElement.click();

        const noCheckboxElement = $('#savingplusno');
        noCheckboxElement.click();

        const goToApplicationElement = $('#gotoapplication');
        goToApplicationElement.click();

        const firstNameFieldElement = $('#firstname');
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

        const ssnFieldElement = $('#ssn');
        ssnFieldElement.setValue('4567789');

        const submitButtonElement = $('#submit');
        submitButtonElement.click();

        const submitMessageElement = $('article>div>p:nth-child(1)');
        const expectedText = 'Your application was submitted successfully.';
        const actualText = submitMessageElement.getText();
        expect(actualText).toMatch(expectedText);

    })
})