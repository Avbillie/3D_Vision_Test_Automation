import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  import { AboutPage } from "./aboutPageClass";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const ap = new AboutPage(driver);
  
  describe("About page functionality", () => {
    beforeEach(async () => {
      await ap.navigate(ap.url);
    });
    afterAll(async () => {
      await ap.quit();
    });
  
  });

  