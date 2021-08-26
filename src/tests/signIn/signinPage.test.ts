import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
import { SignInPage } from "./signinPage";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const sp = new SignInPage(driver);
  
  describe("SignIn page functionality", () => {
    beforeAll(async () => {
      await sp.navigateToHomePage()
      await driver.sleep(3000)
      await sp.navigateToSignInPage()
    });

    test('Signed into website', async()=>{
      await driver.sleep(5000)
      await sp.insertEmail()
      await driver.sleep(5000)
      await sp.insertPassword()
      await driver.sleep(3000)
      expect(await sp.viewInnerText(sp.displayName)).toBe('Welcome\nJohnDoe MaryDoe')
    })
    
    afterAll(async () => {
      await sp.quit();
    });

  });

  