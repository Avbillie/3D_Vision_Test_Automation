import { WebDriver, Builder, Capabilities, until, By } from 'selenium-webdriver'
import { CustomPcBuilderPage } from './customPcBuilder'
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build()
const cp = new CustomPcBuilderPage(driver)

describe('Custom PC builder page functionality', () => {
  beforeAll(async () => {
    await cp.navigateToHomePage()
    await driver.sleep(3000)
    await cp.navigateToSignInPage()
    await cp.insertEmail()
    await driver.sleep(1000)
    await cp.insertPassword()
    await driver.sleep(1000)
    await cp.click(cp.hamburgerMenu)
    await driver.sleep(1000)
    await cp.click(cp.buildYourPcBtn)
    await driver.sleep(3000)
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

  // test('Selected AMD MOTHERBOARD component and set search filter options', async () => {
  //   await cp.click(cp.motherboard)
  //   await cp.insertText(
  //     cp.searchWithinInputfield,
  //     'SUS STRIX X570-E GAMING ATX\n',
  //   )
  //   await cp.sortByBestRating()
  // })

  // test('Selected a MOTHERBOARD\n', async () => {
  //   await cp.selectComponent(cp.motherboardItem)
  // })

  // test('Selected MEMORY component and set search filter options', async () => {
  //   await cp.click(cp.memory)
  //   await cp.insertText(cp.searchWithinInputfield, 'g skill 64GB\n')
  //   await cp.sortByBestRating()
  // })

  // test('Selected a MEMORY\n', async () => {
  //   await cp.selectComponent(cp.memoryItem)
  //   await cp.click(cp.sideMenuArrow)
  // })

  cp.componentArray.forEach((pos) => {
    test(`Selected ${pos.name} component and set search filter options`, async () => {
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
  test('email checkout list to email', async () => {
    // get email button Selectors and its input fields along with the send button
    // write up tests for email api retrieval
    // fix jira wording since switching to newegg
  })

  // afterAll(async () => {
  //   await cp.quit()
  // })
})
