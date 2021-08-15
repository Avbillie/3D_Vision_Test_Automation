import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
import { SharedMethods } from "../../shared/classes/sharedMethods";
  
  export class HomePage extends SharedMethods {
    driver: WebDriver;
    url: string = "https://www.3dvisionllc.com/";
  
    constructor(driver: WebDriver) {
      super(driver)
    }
  
  }
  
  