
import { Builder, Capabilities, By } from "selenium-webdriver"
import { convertToObject } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
   driver.get('http://localhost:4000/')
})

afterAll(async () => {
     driver.quit()
})

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })
test('draw button works', async () =>{
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    expect(await driver.findElement(By.id("choose-header")).getText()).toBe("Choose 2!")
   
})