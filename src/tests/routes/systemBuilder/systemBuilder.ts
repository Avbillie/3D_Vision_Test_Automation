import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
import { SystemBuilderPage } from "./systemBuilder.test";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const ps = new SystemBuilderPage(driver);
  
  describe("System builder functionality", () => {
    beforeEach(async () => {
      await ps.navigate(ps.url);
    });
    afterAll(async () => {
      await ps.quit();
    });
  
  });

  