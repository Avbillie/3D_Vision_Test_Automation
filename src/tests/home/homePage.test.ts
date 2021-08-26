import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  import { HomePage } from "./homepageClass";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const hp = new HomePage(driver);
  
  describe("Home page functionality", () => {
    beforeEach(async () => {
      await hp.navigateToHomePage()
      await driver.sleep(3000)
    });

    test('Navigated to user sign in page', async()=>{
      await hp.navigateToSignInPage()
      await driver.sleep(3000)
      let text = await hp.viewInnerText(hp.titleName)
      expect(text).toBe('Sign In')
      await hp.navigateToHomePage()
    })

    test('Navigated to "custom pc builder" page', async()=>{
      await hp.click(hp.hamburgerMenu)
      await driver.sleep(1000)
      await hp.click(hp.buildYourPcBtn)
      await driver.sleep(3000)
      await hp.click(hp.startPcBuilderBtn)
      expect(driver.getCurrentUrl()).toContain('custom-pc-builder')
    })
    afterAll(async () => {
      await hp.quit();
    });

  });

  