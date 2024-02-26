import { test, expect, Page, Locator } from "@playwright/test"
import { EmployeeDto } from "../../src/dto/EmployeeDto"
import exp from "constants"

const testAddressPartial = "3 osborne road, brentwood"
const testAddressSelection = "3 Osborne Road, Pilgrims Hatch, Brentwood, Essex"
const testAddressResult = "3 Osborne Road, Pilgrims Hatch, Brentwood, Essex CM15 9LE"
const testEmailAddress = "MaryHad.A@LittleLamb.Com"
const testEmailAddressResult = "maryhad.a@littlelamb.com"

test("My first test", async ({ page }) => {

    await page.goto("http://localhost:5173/")

    await page.route("**/localhost/api/employee", async (route, request) => {

        const employeeDto = request.postDataJSON() as EmployeeDto

        expect(employeeDto.title).toBe("Miss")
        expect(employeeDto.firstName).toBe("Suzanne")
        expect(employeeDto.middleNames).toBe("Sally Šasa")
        expect(employeeDto.lastName).toBe("van der Merve")
        expect(employeeDto.preferredName).toBe("Suzie")
        expect(employeeDto.dateOfBirth).toBe("1986-03-17")
        expect(employeeDto.gender).toBe("Female")
        expect(employeeDto.address?.displayValue).toBe(testAddressResult)
        expect(employeeDto.emailAddress).toBe(testEmailAddressResult)
        expect(employeeDto.employmentStartDate).toBe("2024-06-21")
        expect(employeeDto.payrollId).toBe("Emp12321")
        expect(employeeDto.taxCode).toBe("1234L")
        expect(employeeDto.taxCodeIsNonCumulative).toBe(true)

        route.fulfill({ status: 200 })
    })

    // Title
    const title = page.getByTestId("title")

    await title.pressSequentially("miss")
    await title.press("Tab")

    expect(await title.inputValue()).toBe("Miss")

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

    // National insurance details

    // Director status

    // Student loan information

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