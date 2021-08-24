import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";

export class SharedMethods {
  driver: WebDriver;
  homepageBtn: By = By.xpath("//img[contains(@class, 'nav__logo--full')]");
  // System builder button
  systemBuilderBtn: By = By.xpath("//a[contains(@href, '/list/')]");
  // SignIn button
  signInBtn: By = By.xpath("//a[contains(@href, 'https://secure.newegg.com/login/signin?nextpage=https%3A%2F%2Fwww.newegg.com%2F')]")
  url: string = "https://www.newegg.com/";
  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigate(url) {
    await this.driver.manage().window().maximize();
    await this.driver.get(url);
    await this.driver.sleep(2000);
  }

  async navigateToHomePage() {
    await this.driver.manage().window().maximize();
    await this.driver.get(this.url);
    await this.driver.sleep(5000);
  }

  async navigateToSignInPage() {
    await this.driver.wait(
      until.elementIsVisible(
        await this.driver.findElement(this.signInBtn)
      )
    );
    await this.click(this.signInBtn);
  }

  async quit() {
    await this.driver.quit();
  }

  async click(elementBy: By) {
    await this.driver.wait(until.elementIsVisible(await this.driver.findElement(elementBy)))
    return (await this.driver.findElement(elementBy)).click();
  }

  async getAttribute(elementBy: By, attribute: string) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getAttribute(attribute);
  }

  async insertText(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async viewInnerText(elementBy: any) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
  }

  async canView(elementBy: any){
    if (await this.driver.wait(until.elementIsVisible(await this.driver.findElement(elementBy)))){
      return true
    }else{
      return false
    }
    
  }

  async returnToHomePage() {
    await this.driver.wait(until.elementLocated(this.homepageBtn));
    return (await this.driver.findElement(this.homepageBtn)).click();
  }
}
