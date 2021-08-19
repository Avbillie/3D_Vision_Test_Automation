import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
import { SharedMethods } from "../../shared/classes/sharedMethods";
  
  export class HomePage extends SharedMethods {
    // Login button
    loginBtn: By = By.xpath("//a[contains(@href, '/accounts/login/')]")
    // System builder button
    systemBuilderBtn: By = By.xpath("//a[contains(@href, '/list/')]")
    // Website homepage
    url: string = "https://pcpartpicker.com/";
    driver: WebDriver;
  
    constructor(driver: WebDriver) {
      super(driver)
    }L
    async navigateToLoginPage(){
      await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.loginBtn)))
      await this.click(this.loginBtn)
    }

    async navigateToSystemBuilderPage(){
      await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.systemBuilderBtn)))
      await this.click(this.systemBuilderBtn)
    }
  
  }
  
  