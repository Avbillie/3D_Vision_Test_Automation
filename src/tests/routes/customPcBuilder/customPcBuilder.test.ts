import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { CustomPcBuilderPage } from "./customPcBuilder";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const cp = new CustomPcBuilderPage(driver);

describe("Custom PC builder  page functionality", () => {
  beforeAll(async () => {
    await cp.navigateToHomePage();
    await driver.sleep(3000);
    await cp.click(cp.hamburgerMenu);
    await driver.sleep(1000);
    await cp.click(cp.buildYourPcBtn);
    await driver.sleep(3000);
    await cp.click(cp.startPcBuilderBtn);
  });

  test(`Selected cpu filter options`, async () => {
    await cp.insertText(cp.searchWithinInputfield, 'amd ryzen threadripper\n')
    await driver.sleep(2000)
    await cp.sortByBestRating()
    await driver.sleep(2000);
  });

  test(`Selected cpu`, async () => {
    await cp.selectComponent()
    await driver.sleep(2000)
  });

  afterAll(async () => {
    await cp.quit();
  });
});
