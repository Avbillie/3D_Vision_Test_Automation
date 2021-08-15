import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
import { SharedMethods } from "../../shared/classes/sharedMethods";
  
  export class PortNServices extends SharedMethods {
    driver: WebDriver;
    url: string = "https://www.3dvisionllc.com/portfolio-services";
  
    constructor(driver: WebDriver) {
      super(driver)
    }
  
  }
  
  