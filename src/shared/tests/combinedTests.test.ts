import { WebDriver, Builder, Capabilities, until, By } from 'selenium-webdriver'
import { CustomPcBuilderPage } from '../../tests/customPcBuilder/customPcBuilder'
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build()
const cp = new CustomPcBuilderPage(driver)

describe('Sign in and Custom PC builder process functionality\n', () => {
  beforeAll(async () => {
    await cp.navigateToHomePage()
    await driver.sleep(1000)
  })

  test('Navigated to user sign in page\n', async () => {
    await cp.navigateToSignInPage()
    await driver.sleep(1000)
    let text = await cp.viewInnerText(cp.titleName)
    expect(text).toBe('Sign In')
  })

  test('Signed into website\n', async () => {
    await cp.insertEmail()
    await driver.sleep(1000)
    await cp.insertPassword()
    await driver.sleep(1000)
    expect(await cp.viewInnerText(cp.displayName)).toBe(
      'Welcome\nJohnDoe MaryDoe',
    )
  })

  test('Navigated to "custom pc builder" page\n', async () => {
    await cp.click(cp.hamburgerMenu)
    await driver.sleep(1000)
    await cp.click(cp.buildYourPcBtn)
    expect(await driver.getCurrentUrl()).toContain('custom-pc-builder')
  })

  test('Selected CPU component and set search filter options', async () => {
    await cp.click(cp.startPcBuilderBtn)
    if (cp.canView(cp.startNewBuildMessage)) {
      cp.click(cp.startNewBuildBtn)
    }
    await cp.insertText(cp.searchWithinInputfield, 'AMD Ryzen 7 5800X\n')
    await cp.sortByBestRating()
  })

  test('Selected a CPU\n', async () => {
    await cp.selectComponent(cp.cpuItem)
  })

  cp.componentArray.forEach((pos) => {
    test(`Selected ${pos.name} component and set search and sortBy filter options`, async () => {
      await cp.click(pos.component)
      if (pos.additionalAction) {
        await cp.click(pos.additionalAction)
      }
      if (pos.searchCriteria) {
        await cp.insertText(
          cp.searchWithinInputfield,
          `${pos.searchCriteria}\n`,
        )
      }
      await cp.sortByBestRating()
    })

    test(`Selected a ${pos.name}\n`, async () => {
      await cp.selectComponent(pos.selectedItem)
      if (pos.name !== 'OS') {
        await cp.click(cp.sideMenuArrow)
      }
    })
  })

  test('Added all components to cart', async () => {
    await cp.click(cp.addAllToCartBtn)
  })

  afterAll(async () => {
    await cp.quit()
  })
})
