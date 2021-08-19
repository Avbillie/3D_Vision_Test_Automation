import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
import { SharedMethods } from "../../../shared/classes/sharedMethods";
  
  export class ComponentListPage extends SharedMethods {
    driver: WebDriver;
    url: string = "https://pcpartpicker.com/list/";
  
    constructor(driver: WebDriver) {
      super(driver)
    }
  
  }
  
  