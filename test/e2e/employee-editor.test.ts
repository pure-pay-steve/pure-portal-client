//
// Copyright (c) 2023-2024 Pure Software Ltd.  All rights reserved.    
//                                                               
// This source code is the intellectual property of Pure Software 
// Ltd and for information security purposes is classified as     
// COMPANY CONFIDENTIAL.   

import { test, expect, Page, Locator } from "@playwright/test"
import { EmployeeDto } from "../../src/dto/EmployeeDto"

const testAddressPartial = "3 osborne road, brentwood"
const testAddressSelection = "3 Osborne Road, Pilgrims Hatch, Brentwood, Essex"
const testAddressResult = "3 Osborne Road, Pilgrims Hatch, Brentwood, Essex CM15 9LE"
const testAddressResultPostcode = "CM15 9LE"
const testEmailAddress = "MaryHad.A@LittleLamb.Com"
const testEmailAddressResult = "maryhad.a@littlelamb.com"

test("My first test", async ({ page }) => {

    await page.goto("http://localhost:5173/#/employee")

    await page.route("**/localhost/api/employee", async (route, request) => {

        const employeeDto = request.postDataJSON() as EmployeeDto

        expect(employeeDto.descriptor.title).toBe("Prof.")
        expect(employeeDto.descriptor.firstName).toBe("Suzanne")
        expect(employeeDto.descriptor.middleNames).toBe("Sally Šasa")
        expect(employeeDto.descriptor.lastName).toBe("van der Merve")
        expect(employeeDto.descriptor.preferredName).toBe("Suzie")
        expect(employeeDto.dateOfBirth).toBe("1986-03-17")
        expect(employeeDto.gender).toBe("Female")
        expect(employeeDto.address?.displayValue).toBe(testAddressResult)
        expect(employeeDto.address?.postcode).toBe(testAddressResultPostcode)
        expect(employeeDto.emailAddress).toBe(testEmailAddressResult)
        expect(employeeDto.employmentStartDate).toBe("2024-06-21")
        expect(employeeDto.descriptor.payrollId).toBe("Emp12321")
        expect(employeeDto.taxCode).toBe("1234L")
        expect(employeeDto.taxCodeIsNonCumulative).toBe(true)
        expect(employeeDto.niNumber).toBe("NA9876543P")
        expect(employeeDto.niCategory).toBe("M")
        expect(employeeDto.isDirector).toBe(true)
        expect(employeeDto.directorsNiCalculationMethod).toBe("AlternativeMethod")
        expect(employeeDto.studentLoanInfo?.studentLoanType).toBe("Plan4")
        expect(employeeDto.studentLoanInfo?.hasPostGradLoan).toBe(true)

        console.log("All fields on EmployeeDto matched expected values")

        route.fulfill({ status: 200 })
    })

    // Title.  NB testId is shared so can't use getByTestId
    const titleSelectInput = page.locator(getSelector("input[type='text'][role='combobox']", "title"))
    expect(titleSelectInput).not.toBe(undefined)
    await titleSelectInput.pressSequentially("other")
    titleSelectInput.press("Tab")

    const otherTitleInput = page.locator(getSelector("input[type='text'][role='input']", "title"))
    expect(otherTitleInput).not.toBe(undefined)
    await otherTitleInput.pressSequentially("Prof.")
    await otherTitleInput.press("Tab")

    expect(await titleSelectInput.inputValue()).toBe("Other")
    expect(await otherTitleInput.inputValue()).toBe("Prof.")


    // First name
    const firstName = page.getByTestId("first-name")
    expect(firstName).not.toBe(undefined)
    expect(firstName).toBeFocused()

    await firstName.pressSequentially("suzanne")
    await firstName.press("Tab")

    expect(await firstName.inputValue()).toBe("Suzanne")

    // Middle name(s)
    const middleNames = page.getByTestId("middle-names")
    expect(middleNames).not.toBe(undefined)
    expect(middleNames).toBeFocused()

    await middleNames.pressSequentially("sally šasa")
    await middleNames.press("Tab")

    expect(await middleNames.inputValue()).toBe("Sally Šasa")

    // Last name
    const lastName = page.getByTestId("last-name")
    expect(lastName).not.toBe(undefined)
    expect(lastName).toBeFocused()

    await lastName.pressSequentially("van der merve")
    await lastName.press("Tab")

    expect(await lastName.inputValue()).toBe("van der Merve")

    // Preferred name
    const preferredName = page.getByTestId("preferred-name")
    expect(preferredName).not.toBe(undefined)
    expect(preferredName).toBeFocused()

    await preferredName.pressSequentially("suzie")
    await preferredName.press("Tab")

    expect(await preferredName.inputValue()).toBe("Suzie")

    // Date of birth
    const dateOfBirth = page.getByTestId("date-of-birth")
    expect(dateOfBirth).not.toBe(undefined)
    expect(dateOfBirth).toBeFocused()
    await dateOfBirth.pressSequentially("17031986")
    await dateOfBirth.press("Tab")
    expect(await dateOfBirth.inputValue()).toBe("1986-03-17")

    // Gender
    const gender = page.locator(getSelector("div", "gender"))
    expect(gender).not.toBe(undefined)
    expect(gender).toBeFocused()
    const genderInput = gender.locator("input")
    expect(genderInput).not.toBe(undefined)
    await gender.pressSequentially("F")
    await gender.press("Tab")
    expect(await genderInput.isChecked()).toBe(true)

    // Postal address
    const addressSelector = getSelector("input", "address")
    const address = page.locator(addressSelector)
    expect(address).not.toBe(undefined)
    expect(address).toBeFocused()
    await address.pressSequentially(testAddressPartial, { delay: 100 })

    // Run the select option after a delay to allow the address list to be populated
    setTimeout(async () => await selectOption(page, addressSelector, testAddressSelection), 2000)

    await page.waitForTimeout(2500)

    // Email address
    const emailAddress = page.getByTestId("email")
    expect(emailAddress).not.toBe(undefined)
    expect(emailAddress).toBeFocused()
    await emailAddress.pressSequentially(testEmailAddress)
    await emailAddress.press("Tab")
    expect(await emailAddress.inputValue()).toBe(testEmailAddressResult)

    // Employment start date
    const startDate = page.getByTestId("start-date")
    expect(startDate).not.toBe(undefined)
    expect(startDate).toBeFocused()
    await startDate.pressSequentially("21062024")
    await startDate.press("Tab")
    expect(await startDate.inputValue()).toBe("2024-06-21")

    // Payroll id
    const payrollId = page.getByTestId("payroll-id")
    expect(payrollId).not.toBe(undefined)
    expect(payrollId).toBeFocused()

    await payrollId.pressSequentially("Emp12321")
    await payrollId.press("Tab")

    expect(await payrollId.inputValue()).toBe("Emp12321")

    // Tax code.  NB testId is shared so can't use getByTestId
    const taxCodeInput = page.locator(getSelector("input[type='text']", "tax-code"))
    const taxCodeNonCumlative = page.locator(getSelector("div", "tax-code"))
    const taxCodeCheckbox = page.locator(getSelector("input[type='checkbox']", "tax-code"))
    expect(taxCodeInput).not.toBe(undefined)
    expect(taxCodeCheckbox).not.toBe(undefined)
    expect(taxCodeInput).toBeFocused()

    await taxCodeInput.pressSequentially("1234lx")
    await taxCodeInput.press("Tab")
    expect(taxCodeNonCumlative).toBeFocused()

    expect(await taxCodeInput.inputValue()).toBe("1234L")
    expect(await taxCodeCheckbox.isChecked()).toBe(true)
    await taxCodeCheckbox.press("Tab")

    // National insurance details.  NB testId is shared so can't use getByTestId
    const niNumber = page.locator(getSelector("input[type='text']", "ni-details"))
    const niCategory = page.locator(getSelector("select", "ni-details"))
    expect(niNumber).not.toBe(undefined)
    expect(niCategory).not.toBe(undefined)
    expect(niNumber).toBeFocused()

    await niNumber.pressSequentially("Na9876543p")
    await niNumber.press("Tab")
    expect(niCategory).toBeFocused()
    await niCategory.press("M")
    await niCategory.press("Tab")

    expect(await niNumber.inputValue()).toBe("NA9876543P")
    expect(await niCategory.inputValue()).toBe("M")

    // Director status.  NB testId is shared so can't use getByTestId
    const isDirectorForNiDiv = page.locator(getSelector("div", "directors-ni"))
    const isDirectorForNi = page.locator(getSelector("input[type='checkbox']", "directors-ni"))
    const directorsNiMethodSelect = page.locator(getSelector("select", "directors-ni"))
    expect(isDirectorForNiDiv).not.toBe(undefined)
    expect(isDirectorForNi).not.toBe(undefined)
    expect(directorsNiMethodSelect).not.toBe(undefined)
    expect(isDirectorForNiDiv).toBeFocused()

    await isDirectorForNiDiv.press("Space")

    expect(directorsNiMethodSelect).toBeFocused()
    await directorsNiMethodSelect.press("A")
    await directorsNiMethodSelect.press("Tab")

    expect(await isDirectorForNi.isChecked()).toBe(true)
    expect(await directorsNiMethodSelect.inputValue()).toBe("AlternativeMethod")

    // Student loan information.  NB testId is shared so can't use getByTestId
    const studentLoanSelect = page.locator(getSelector("select", "student-loan"))
    const postGradLoanDiv = page.locator(getSelector("div", "student-loan"))
    const hasPostGradLoan = page.locator(getSelector("input[type='checkbox']", "student-loan"))
    expect(studentLoanSelect).not.toBe(undefined)
    expect(postGradLoanDiv).not.toBe(undefined)
    expect(hasPostGradLoan).not.toBe(undefined)
    expect(studentLoanSelect).toBeFocused()

    await studentLoanSelect.press("4")
    await studentLoanSelect.press("Tab")
    expect(postGradLoanDiv).toBeFocused()

    await postGradLoanDiv.press("Y")
    
    expect(await studentLoanSelect.inputValue()).toBe("Plan4")
    expect(await hasPostGradLoan.isChecked()).toBe(true)
    
    await page.click(getSelector("button", "submit"))
})

const getSelector = (element: string, testId: string): string => `${element}[data-testid='${testId}']`

const selectOption = async (page: Page, selector: string, value: string) => {
    // Get the input element and set the value to match the text in the option.  Then send an input event
    // to make the selection.  Note that the input event MUST NOT be an InputEvent,  due to the way
    // getAddress.io works.
    page.evaluate(({s, v}) => {
        const input = document.querySelector(s) as HTMLInputElement
        input.value = v
        // @ts-ignore
        const event = new Event("input", {  target: input, bubbles: true, cancelable: false, composed: true })
        input?.dispatchEvent(event)
    }, {s: selector, v: value})
}