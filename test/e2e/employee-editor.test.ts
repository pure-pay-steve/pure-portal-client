import { test, expect } from '@playwright/test'

test("My first test", async ({ page }) => {
    
    await page.goto('http://localhost:5173/')

    // Title
    const title = page.locator("input[data-test-id='title']")

    await title.pressSequentially('miss')
    await title.press('Tab')

    expect(await title.inputValue()).toBe('Miss')

    // First name
    const firstName = page.locator("input[data-test-id='first-name']")
    expect(firstName).not.toBe(undefined)
    expect(firstName).toBeFocused()

    await firstName.pressSequentially('suzanne')
    await firstName.press('Tab')

    expect(await firstName.inputValue()).toBe('Suzanne')

    // Middle name(s)
    const middleNames = page.locator("input[data-test-id='middle-names']")
    expect(middleNames).not.toBe(undefined)
    expect(middleNames).toBeFocused()

    await middleNames.pressSequentially('sally šasa')
    await middleNames.press('Tab')

    expect(await middleNames.inputValue()).toBe('Sally Šasa')

    // Last name
    const lastName = page.locator("input[data-test-id='last-name']")
    expect(lastName).not.toBe(undefined)
    expect(lastName).toBeFocused()

    await lastName.pressSequentially('van der merve')
    await lastName.press('Tab')

    expect(await lastName.inputValue()).toBe('van der Merve')

    // Preferred name
    const preferredName = page.locator("input[data-test-id='preferred-name']")
    expect(preferredName).not.toBe(undefined)
    expect(preferredName).toBeFocused()

    await preferredName.pressSequentially('suzie')
    await preferredName.press('Tab')

    expect(await preferredName.inputValue()).toBe('Suzie')
    
})