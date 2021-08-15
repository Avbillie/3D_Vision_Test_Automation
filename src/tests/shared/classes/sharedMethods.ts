
import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  
  export class SharedMethods {
    driver: WebDriver;
  
    constructor(driver: WebDriver) {
      this.driver = driver;
    }
  
    async navigate(url) {
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
  
    async sendKeys(elementBy: By, keys) {
      await this.driver.wait(until.elementLocated(elementBy));
      return this.driver.findElement(elementBy).sendKeys(keys);
    }
  
    async getText(elementBy: any) {
      await this.driver.wait(until.elementLocated(elementBy));
      return (await this.driver.findElement(elementBy)).getText();
    }
  
  }
  
  