
import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  
  export class SharedMethods {
    driver: WebDriver;
    homepageBtn: By = By.xpath("//img[contains(@class, 'nav__logo--full')]")
    constructor(driver: WebDriver) {
      this.driver = driver;
    }
  
    async navigate(url) {
      await this.driver.manage().window().maximize()
      await this.driver.sleep(2000)
      await this.driver.get(url);
    }
    async quit() {
      await this.driver.quit()
    }
  
    async click(elementBy: By) {
      await this.driver.wait(until.elementLocated(elementBy));
      return (await this.driver.findElement(elementBy)).click();
    }
  
    async getAttribute(elementBy: By, attribute: string) {
      await this.driver.wait(until.elementLocated(elementBy));
      return (await this.driver.findElement(elementBy)).getAttribute(attribute);
    }
  
    async insertText(elementBy: By, keys) {
      await this.driver.wait(until.elementLocated(elementBy));
      return this.driver.findElement(elementBy).sendKeys(keys);
    }
  
    async viewInnerText(elementBy: any) {
      await this.driver.wait(until.elementLocated(elementBy));
      return (await this.driver.findElement(elementBy)).getText();
    }

    async returnToHomePage(){
      await this.driver.wait(until.elementLocated(this.homepageBtn));
      return (await this.driver.findElement(this.homepageBtn)).click();
    }
  
  }
  
  