import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  import { LoginPage} from "./login";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const ap = new LoginPage(driver);
  
  describe("Login page functionality, () => {
    beforeEach(async () => {
      await ap.navigate(ap.url);
    });
    afterAll(async () => {
      await ap.quit();
    });
  
  });

  