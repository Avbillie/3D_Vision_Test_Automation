import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  import { PortNServices} from "./portfolio&servicesPageClass";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const ps = new PortNServices(driver);
  
  describe("Portfolio and services page functionality", () => {
    beforeEach(async () => {
      await ps.navigate(ps.url);
    });
    afterAll(async () => {
      await ps.quit();
    });
  
  });

  