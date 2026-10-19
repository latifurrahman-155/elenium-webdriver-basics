
import { Builder, By } from 'selenium-webdriver';

class Base {
    constructor() {
        // Initialize browser
        this.driver = new Builder()
            .forBrowser('chrome')
            .build();

        this.registerLink = By.xpath("//a[@class='ico-register']");
        this.gender = By.id("gender-male");
        this.firstName = By.id("FirstName");
    }

    async openBrowser() {
        console.log("Opening the browser");
        await this.driver.get(
            "https://demowebshop.tricentis.com/register"
        );
    }

    async clickRegisterLink() {
        await this.driver.findElement(this.registerLink).click();
    }

    async selectGender() {
        await this.driver.findElement(this.gender).click();
    }

    async enterFirstName() {
        await this.driver.findElement(this.firstName).sendKeys("Latifur");
    }

    async closeBrowser() {
        console.log("Closing the browser");
        await this.driver.quit();
    }
}

const result = new Base();

await result.openBrowser();
await result.clickRegisterLink();
await result.selectGender();
await result.enterFirstName();
await result.closeBrowser();


