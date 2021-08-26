import { WebDriver, Builder, Capabilities, until, By } from 'selenium-webdriver'
import { SignInPage } from '../signIn/signinPage'

export class CustomPcBuilderPage extends SignInPage {
  driver: WebDriver
  // COMPONENT SELECTORS
  cpu: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-cpu')]")
  motherboard: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-motherboard')]")
  memory: By = By.xpath("//div[contains(@class, 'swiper-slide swiper-slide-next')]//i[contains(@class, 'diy-memory')]")
  videocard: By = By.xpath("//div[contains(@class, 'swiper-slide')]//i[contains(@class, 'diy-gpu')]")
  case: By = By.xpath("//div[contains(@class, 'swiper-slide')]//i[contains(@class, 'diy-case')]")
  powersupply: By = By.xpath("//div[contains(@class, 'swiper-slide')]//i[contains(@class, 'diy-psu')]")
  storage: By = By.xpath("//div[contains(@class, 'swiper-slide')]//i[contains(@class, 'diy-hdd')]")
  cooling: By = By.xpath("//div[contains(@class, 'swiper-slide')]//i[contains(@class, 'diy-cooling')]")
  os: By = By.xpath("//div[contains(@class, 'swiper-slide')]//i[contains(@class, 'diy-os')]")
  
  // SELECTED ITEMS FROM COMPONENT SEARCH RESULTS
  cpuItem: By = By.xpath("//*[text() = 'AMD Ryzen 7 5800X Desktop Processor']")
  motherboardItem: By = By.xpath("//*[text() = 'ASUS STRIX X570-E GAMING ATX AMD Motherboard']")
  memoryItem: By = By.xpath("//*[text() = 'G.SKILL TridentZ RGB Series Model F4-3600C16D-64GTZR']")
  videocardItem: By = By.xpath("//*[text() = 'MSI RTX 2080 VENTUS 8G OC GeForce RTX 2080 Video Card']")
  caseItem: By = By.xpath("//*[text() = 'Cooler Master MB540-KGNN-S00 Computer Case']")
  powersupplyItem: By = By.xpath("//*[text() = 'Super Flower Leadex Platinum 850W 80+ Platinum, 10 Years Warranty, ECO Fanless & Silent Mode, Full Modular Power Supply, Dual Ball Bearing Fan, SF-850F14MP']")
  storageItem: By = By.xpath("//*[text() = 'Seagate Internal Hard Drive ST18000NE000 18TB 7200 RPM 256MB Cache']")
  coolingItem: By = By.xpath("//*[text() = 'Cooler Master MasterAir MA620M Dual Tower Addressable RGB CPU Air Cooler w/ 6 CDC Heat Pipes, SF120R Fan, hexagon logo and Embedded Addressable RGB Lighting Strip']")
  osItem: By = By.xpath("//*[text() = 'Windows 10 Pro 32-bit/64-bit - (Product Key Code Email Delivery)']")

  // ADDITIONAL FUNCTIONALITY BUTTONS

  // Storage type HDD button
  selctHDDBtn: By = By.xpath("//div[contains(@class, 'pc-builder-item')]//a[contains(@href, 'https://www.newegg.com/tools/custom-pc-builder/pl/ID-14?diywishlist=0')]")
  // Cpu cooler type fan & heatsink button
  selectFanHeatsinkBtn: By = By.xpath("//div[contains(@class, 'pc-builder-item')]//a[contains(@href, 'https://www.newegg.com/tools/custom-pc-builder/pl/ID-574?diywishlist=0')]")
  // Add all to cart button
  addAllToCartBtn: By = By.xpath("//button[text() = 'Add All to Cart ']")
  // Component select button
  selectBtn: By = By.xpath("//div[contains(@class, 'item-actions')]//i[contains(@class, 'fas fa-plus')]")
  // Component list 'sort by' dropdown selection menu
  sortBy: By = By.xpath("//div[contains(@class, 'list-tool-sortby')]")
  // Component list 'sort by' dropdown selection menu best rating option
  bestRatings: By = By.xpath("//option[contains(@value, '4')]")
  // Component list 'search within' input field
  searchWithinInputfield: By = By.xpath("//input[contains(@placeholder, 'Search Within')]")
  // Side menu control
  sideMenuArrow: By = By.xpath("//a[contains(@class, 'pc-builder-control')]//i[contains(@class, 'fa fa-arrow-circle-right')]")
  // Start new build? message
  startNewBuildMessage: By = By.xpath("//div[text() = 'Do you want to start a new build?']")
  // Start new build button
  startNewBuildBtn: By = By.xpath(".//button[text() = 'START A NEW BUILD']")

  componentArray: any[] = [
    {
      name: 'MOTHERBOARD',
      component: this.motherboard,
      selectedItem: this.motherboardItem,
      searchCriteria: 'ASUS STRIX X570-E GAMING ATX\n',
    },
    {
      name: 'MEMORY CARD',
      component: this.memory,
      selectedItem: this.memoryItem,
      searchCriteria: 'g skill 64GB\n',
    },
    {
      name: 'GPU',
      component: this.videocard,
      selectedItem: this.videocardItem,
      searchCriteria: 'nvidia 2080\n',
    },
    {
      name: 'CASE',
      component: this.case,
      selectedItem: this.caseItem,
    },
    {
      name: 'POWER SUPPLY',
      component: this.powersupply,
      selectedItem: this.powersupplyItem,
      searchCriteria: '850W\n',
    },
    {
      name: 'HDD',
      component: this.storage,
      selectedItem: this.storageItem,
      additionalAction: this.selctHDDBtn,
    },
    {
      name: 'CPU COOLING FAN',
      component: this.cooling,
      selectedItem: this.coolingItem,
      searchCriteria: 'coolermaster\n',
      additionalAction: this.selectFanHeatsinkBtn,
    },
    {
      name: 'OS',
      component: this.os,
      selectedItem: this.osItem,
    },
  ]
  constructor(driver: WebDriver) {
    super(driver)
  }

  async selectComponent(component: By) {
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(component)),
    )
    await this.click(component)
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(component)),
    )
    await this.click(this.selectBtn)
  }

  async sortByBestRating() {
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.sortBy)),
    )
    await this.click(this.sortBy)
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.bestRatings)),
    )
    await this.click(this.bestRatings)
  }
}
