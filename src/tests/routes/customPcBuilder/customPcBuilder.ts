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
  videocard: By = By.xpath("//div[contains(@class, 'swiper-slide swiper-slide-next')]//i[contains(@class, 'diy-gpu')]");
  case: By = By.xpath("//div[contains(@class, 'swiper-slide swiper-slide-next')]//i[contains(@class, 'diy-case')]");
  powersupply: By = By.xpath("//div[contains(@class, 'swiper-slide swiper-slide-next')]//i[contains(@class, 'diy-psu')]");
  storage: By = By.xpath("//div[contains(@class, 'swiper-slide swiper-slide-next')]//i[contains(@class, 'diy-hdd')]");
  cooling: By = By.xpath("//div[contains(@class, 'swiper-slide swiper-slide-next')]//i[contains(@class, 'diy-cooling')]");
  os: By = By.xpath("//div[contains(@class, 'swiper-slide swiper-slide-next')]//i[contains(@class, 'diy-os')]");  
  // Selected items from component search results
  cpuItem: By = By.xpath("//*[text() = 'AMD Ryzen Threadripper PRO 3955WX Desktop Processor']")
  motherboardItem: By = By.xpath("//*[text() = 'ASUS Pro WS WRX80E-SAGE SE WIFI Extended ATX AMD Motherboard']")
  memoryItem: By = By.xpath("//*[text() = 'G.SKILL Trident Z Royal Series Model F4-4000C18D-64GTRS']")
  videocardItem: By = By.xpath("//*[text() = 'MSI RTX 2080 VENTUS 8G OC GeForce RTX 2080 Video Card']")

  
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
  
  
  
  setUparray: any [] = [this.cpu, this.motherboard, this.videocard, this.case, this.powersupply, this.storage, this.cooling, this.os]
  componentArray: any[] = []
  constructor(driver: WebDriver) {
    super(driver);
  }
  
  async selectComponent(component:By){
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(component)))
    await this.click(component)
    await this.driver.sleep(2000)
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(component)))
    await this.click(this.selectBtn)
  }
  
  async sortByBestRating(){
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.sortBy)))
    await this.click(this.sortBy)
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.bestRatings)))
    await this.click(this.bestRatings)
  }
  

}
