import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
import { SharedMethods } from "../../shared/classes/sharedMethods";
  
  export class AboutPage extends SharedMethods {
    driver: WebDriver;
    url: string = "https://www.3dvisionllc.com/about";
  
    constructor(driver: WebDriver) {
      super(driver)
    }
  
  }
  
  