import {
  WebDriver,
  Builder,
  Capabilities,
  until,
  By,
} from "selenium-webdriver";
import { HomePage } from "../home/homePageClass";
export class SignInPage extends HomePage {
  // SignIn button
  signInBtn: By = By.xpath(
    "//a[contains(@href, 'https://secure.newegg.com/login/signin?nextpage=https%3A%2F%2Fwww.newegg.com%2F')]"
  );
  // Display name
  displayName: By = By.xpath(
    "//div[contains(@id, 'myaccount')]"
  );
  // Email input field
  emailInputField: By = By.xpath("//input[contains(@name, 'signEmail')]");
  // Password input field
  passwordInputField: By = By.xpath("//input[contains(@name, 'password')]");
  driver: WebDriver;

  constructor(driver: WebDriver) {
    super(driver);
  }
  async navigateToLoginPage() {
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.signInBtn))
    );
    await this.click(this.signInBtn);
  }

  async insertEmail() {
    await this.driver.wait(
      until.elementIsVisible(
        await this.driver.findElement(this.emailInputField)
      )
    );
    await this.insertText(this.emailInputField, "johnDoeMaryDoe7@gmail.com\n");
  }

  async insertPassword() {
    await this.driver.wait(
      until.elementIsVisible(
        await this.driver.findElement(this.passwordInputField)
      )
    );
    await this.insertText(this.passwordInputField, "NewEgg1234!!\n");
  }
}
