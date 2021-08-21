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
var start = new Date().getTime();
    
describe("Custom PC builder  page functionality", () => {
  beforeAll(async () => {
    await cp.navigateToHomePage();
    await driver.sleep(3000);
    await cp.click(cp.hamburgerMenu);
    await driver.sleep(1000);
    await cp.click(cp.buildYourPcBtn);
    await driver.sleep(3000);
  });
  
  test('Selected CPU component and set search filter options', async () => {
    await cp.click(cp.startPcBuilderBtn);
    await cp.insertText(cp.searchWithinInputfield, 'amd ryzen threadripper\n')
    await cp.sortByBestRating()
  });

  test('Selected a CPU', async () => {
    await cp.selectComponent(cp.cpuItem)
  });
  
  test('Selected AMD MOTHERBOARD component and set search filter options', async () =>{
    await cp.click(cp.motherboard)
    await cp.sortByBestRating()
  })

  test('Selected a MOTHERBOARD', async () => {
    await cp.selectComponent(cp.motherboardItem)
    // await cp.click(cp.sideMenuArrow)
  });

  test('Selected MEMORY component and set search filter options', async () =>{
    await cp.click(cp.memory)
    await cp.insertText(cp.searchWithinInputfield, 'g skill 64GB\n')
    await cp.sortByBestRating()
  })

  test('Selected a MEMORY', async () => {
    await cp.selectComponent(cp.memoryItem)
    await cp.click(cp.sideMenuArrow)
  });

  test('Selected GPU component and set search filter options', async () =>{
    await cp.click(cp.videocard)
    await cp.insertText(cp.searchWithinInputfield, 'nvidia 2080\n')
    await cp.sortByBestRating()
  })

  test('Selected a GPU', async () => {
    await cp.selectComponent(cp.videocardItem)
  });

  

  // afterAll(async () => {
  //   await cp.quit();
  // });
});
