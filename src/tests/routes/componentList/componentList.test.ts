import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { ComponentListPage } from "./componentList";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const hp = new ComponentListPage(driver);

describe("Home page functionality", () => {
  beforeEach(async () => {
    await hp.navigate(hp.url);
  });
  afterAll(async () => {
    await hp.quit();
  });
});
