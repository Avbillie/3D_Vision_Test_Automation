import {
    WebDriver,
    Builder,
    Capabilities,
    until,
    By,
  } from "selenium-webdriver";
  import { HomePage } from "./homePage";
  const chromedriver = require("chromedriver");
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  const hp = new HomePage(driver);
  
  describe("Home page functionality", () => {
    beforeAll(async () => {
      await hp.navigate(hp.url)
      await driver.sleep(1000)
    });

    test('Navigated to user login page', async()=>{
      await hp.navigateToLoginPage()
      await driver.sleep(1000)
      expect(await driver.getCurrentUrl()).toContain('/accounts/login/')
    })
    
    test('Returned to home page', async()=>{
      await hp.returnToHomePage()
      await driver.sleep(1000)
      expect(await driver.getCurrentUrl()).toBe('https://pcpartpicker.com/')
    })
    
    test('Navigated to system builder page', async()=>{
      await hp.navigateToSystemBuilderPage()
      await driver.sleep(1000)
      expect(await driver.getCurrentUrl()).toContain('/list/')
    })
    afterAll(async () => {
      await hp.quit();
    });

  });

  