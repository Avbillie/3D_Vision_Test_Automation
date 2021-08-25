import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { SharedMethods } from "../../../shared/classes/sharedMethods";

export class HomePage extends SharedMethods {
  // Login button
  loginBtn: By = By.xpath("//a[contains(@href, '/accounts/login/')]");
  driver: WebDriver;
  // SignIn title
  titleName: By = By.xpath("//div[contains(@class, 'signin-title')]")
  // Site collapse menu
  hamburgerMenu: By = By.xpath("//i[contains(@aria-label, 'Site Menu')]")
  // Build your pc button
  buildYourPcBtn: By = By.xpath("//a[contains(@title, 'Build Your Own Custom PC')]")
  // Build you own pc page intro
  intro: By = By.xpath("//div[contains(@class,'intro')]")
  // Start pc building button
  startPcBuilderBtn: By = By.xpath("//div[contains(@class, 'pc-builder-item')]//i[contains(@class, 'diy-cpu')]")
  constructor(driver: WebDriver) {
    super(driver);
  }
}
