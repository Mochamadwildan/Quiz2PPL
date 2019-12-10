const {Builder, By, Key, util} = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://demo.1crmcloud.com/login.php");
    const ind1 = By.id("login_user");
    const ind2 = By.id("login_pass");
    const ind3 = By.className('meta-profile');
    await driver.findElement(ind1).sendKeys("admin");
    await driver.findElement(ind2).sendKeys("admin",Key.ENTER);
    await driver.sleep(10000);
    await driver.findElement(ind3).click();
}
example(); 