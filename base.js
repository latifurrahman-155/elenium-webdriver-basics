import { Builder, By } from "selenium-webdriver";

class Base {
    constructor() {
        this.driver = new Builder()
            .forBrowser("chrome")
            .build();
    }

    async openBrowser() {
        await this.driver.get("https://efhub.com/");
    }

    async closeBrowser() {
        await this.driver.quit();
    }
}

async function main() {
    const result = new Base();

    try {
        await result.openBrowser();
         await result.closeBrowser();
    } catch (error) {
        console.log(error);
    }
}

main();

