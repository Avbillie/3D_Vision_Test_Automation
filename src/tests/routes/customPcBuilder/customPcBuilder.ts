import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { SignInPage } from "../signIn/signinPage";

export class CustomPcBuilderPage extends SignInPage {
  driver: WebDriver;
  // Component Selectors
  cpu: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-cpu')]")
  motherboard: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-motherboard')]");
  memory: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-memory')]");
  videocard: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-gpu')]");
  case: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-case')]");
  powersupply: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-psu')]");
  storage: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-hdd')]");
  cooling: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-cooling')]");
  os: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-os')]");
  accesories: By = By.xpath("//div[contains(@class, 'pc-builder-icon')]//i[contains(@class, 'diy-accesories')]");
  monitorBtn: By = By.xpath("//div[contains(@class, 'pc-builder-item')]//a[contains(@href, 'https://www.newegg.com/tools/custom-pc-builder/pl/ID-3743?diywishlist=0')]")
  // Component list 'sort by' dropdown selection menu
  sortBy: By = By.xpath("//div[contains(@class, 'list-tool-sortby')]")
  // Component list 'sort by' dropdown selection menu best rating option
  bestRatings: By = By.xpath("//option[contains(@value, '4')]")
  // Component list 'search within' input field
  searchWithinInputfield: By = By.xpath("//input[contains(@placeholder, 'Search Within')]")
  // Component select button
  selectBtn: By = By.xpath("//div[contains(@class, 'item-actions')]//i[contains(@class, 'fas fa-plus')]")
  // First item in component list
  firstItem: By = By.xpath(".//*[text() = 'AMD Ryzen Threadripper PRO 3955WX Desktop Processor']")
  setUparray: any [] = [this.cpu, this.motherboard, this.videocard, this.case, this.powersupply, this.storage, this.cooling, this.os, this.accesories]
  componentArray: any[] = []

  constructor(driver: WebDriver) {
    super(driver);
  }
  
  async selectComponent(){
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.firstItem)))
    await this.click(this.firstItem)
    await this.driver.sleep(2000)
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.selectBtn)))
    await this.click(this.selectBtn)
  }
  
  async sortByBestRating(){
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.sortBy)))
    await this.click(this.sortBy)
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.bestRatings)))
    await this.click(this.bestRatings)
  }
  

}
