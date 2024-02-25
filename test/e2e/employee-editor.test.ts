import { test, expect, Page, Locator } from '@playwright/test'
import { EmployeeDto } from '../../src/dto/EmployeeDto'
import exp from 'constants'

test("My first test", async ({ page }) => {

    await page.goto('http://localhost:5173/')

    await page.route('**/localhost/api/employee', async (route, request) => {

        const employeeDto = request.postDataJSON() as EmployeeDto

        expect(employeeDto.title).toBe('Miss')
        expect(employeeDto.firstName).toBe('Suzanne')
        expect(employeeDto.middleNames).toBe('Sally Šasa')
        expect(employeeDto.lastName).toBe('van der Merve')
        expect(employeeDto.preferredName).toBe('Suzie')
        expect(employeeDto.dateOfBirth).toBe('1986-03-17')
        expect(employeeDto.gender).toBe('Female')
        //expect(employeeDto.emailAddress).toBe('')
        //expect(employeeDto.address?.displayValue).toBe('3 Osborne Road, Pilgrims Hatch, Brentwood, Essex CM15 9LE')

        route.fulfill({ status: 200 })
    })

    // Title
    const title = page.locator(getSelector("input", "title"))

    await title.pressSequentially('miss')
    await title.press('Tab')

    expect(await title.inputValue()).toBe('Miss')

    // First name
    const firstName = page.locator(getSelector("input", "first-name"))
    expect(firstName).not.toBe(undefined)
    expect(firstName).toBeFocused()

    await firstName.pressSequentially('suzanne')
    await firstName.press('Tab')

    expect(await firstName.inputValue()).toBe('Suzanne')

    // Middle name(s)
    const middleNames = page.locator(getSelector("input", "middle-names"))
    expect(middleNames).not.toBe(undefined)
    expect(middleNames).toBeFocused()

    await middleNames.pressSequentially('sally šasa')
    await middleNames.press('Tab')

    expect(await middleNames.inputValue()).toBe('Sally Šasa')

    // Last name
    const lastName = page.locator(getSelector("input", "last-name"))
    expect(lastName).not.toBe(undefined)
    expect(lastName).toBeFocused()

    await lastName.pressSequentially('van der merve')
    await lastName.press('Tab')

    expect(await lastName.inputValue()).toBe('van der Merve')

    // Preferred name
    const preferredName = page.locator(getSelector("input", "preferred-name"))
    expect(preferredName).not.toBe(undefined)
    expect(preferredName).toBeFocused()

    await preferredName.pressSequentially('suzie')
    await preferredName.press('Tab')

    expect(await preferredName.inputValue()).toBe('Suzie')

    const dateOfBirth = page.locator(getSelector("input", "date-of-birth"))
    expect(dateOfBirth).not.toBe(undefined)
    expect(dateOfBirth).toBeFocused()
    await dateOfBirth.pressSequentially('17031986')
    await dateOfBirth.press('Tab')
    expect(await dateOfBirth.inputValue()).toBe('1986-03-17')

    const gender = page.locator(getSelector("div", "gender"))
    expect(gender).not.toBe(undefined)
    expect(gender).toBeFocused()
    const genderInput = gender.locator("input")
    expect(genderInput).not.toBe(undefined)
    await gender.pressSequentially('F')
    await gender.press('Tab')
    expect(await genderInput.isChecked()).toBe(true)

    const addressSelector = getSelector("input", "address")
    const address = page.locator(addressSelector)
    expect(address).not.toBe(undefined)
    expect(address).toBeFocused()
    await address.pressSequentially('3 osborne road, brentwood', { delay: 100 })
    // setTimeout(async () => {
    //     address.press('ArrowDown')
    //     address.press('Enter')        
    // }, 1000);

    setTimeout(async () => await selectOption(page, address, addressSelector), 2000)

    await page.waitForTimeout(4500)

    await page.pause()

    // > option[value='3 Osborne Road, Pilgrims Hatch, Brentwood, Essex']").selected = true
    // const list = await page.locator("#getAddress-autocomplete-native-list")
    // expect(list).not.toBe(null)

    // list.element.options.forEach(element => {
    //     print(element) 
    // });

    //list.selectOption('3 Osborne Road, Pilgrims Hatch, Brentwood, Essex')

    // page.evaluate(() => {
    //     document.querySelector("#getAddress-autocomplete-native-list > option[value='3 Osborne Road, Pilgrims Hatch, Brentwood, Essex']").selected = true
    // })

    //await address.locator("button").click()

    //const list = await page.waitForSelector('datalist#getAddress-autocomplete-native-list', { state: 'hidden' })
    // try {
    //     const list2 = await page.waitForSelector('datalist#getAddress-autocomplete-native-list', { state: 'visible' })
    // } catch (error) {
    // }
    //await address.selectoption('3 Osborne Road, Pilgrims Hatch, Brentwood, Essex CM15 9LE')
    //expect(list2).not.toBe(null)
    // await address.pressSequentially(' ')
    // await address.click()
    //list.selectOption('3 Osborne Road, Pilgrims Hatch, Brentwood, Essex CM15 9LE')
    // await page.waitForTimeout(1500)
    //await page.waitForTimeout(1000)
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('ArrowDown');

    // // await page.keyboard.down('Alt');
    // // await page.keyboard.press('ArrowDown');
    // // await page.keyboard.up('Alt');
    // await page.keyboard.press('Enter')

    // address.press('ArrowDown')
    // address.press('ArrowDown')
    // address.press('Enter')

    const emailAddress = page.locator(getSelector("input", "email"))
    expect(emailAddress).not.toBe(undefined)
    expect(emailAddress).toBeFocused()

    await page.click(getSelector("button", "submit"))
})

const getSelector = (element: string, testId: string): string => `${element}[data-testid='${testId}']`

const selectOption = async (page: Page, locator: Locator, selector: string) => {
    page.evaluate(s => {
        const input = document.querySelector(s)
        input.value = "3 Osborne Road, Pilgrims Hatch, Brentwood, Essex"
        const event = new Event('input', {  target: input, bubbles: true, cancelable: false, composed: true })
        input?.dispatchEvent(event)
    }, selector)
}