const puppeteer = require('puppeteer');
import info from "../PB JSON/login.json"
export default async (req, res) => {
try
{
let browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://bluevote.page.link/xBpZ');
    let button = await page.$("#phoneBankLogin > div > div.inputs > div:nth-child(3) > input");
    await page.evaluate(val => document.querySelector("#Email").value = val, info.username);
    await page.click("#s2id_VolunteerOrganizationId > a");
    await button.evaluate(button => button.click());
    await page.waitForNavigation();
    await page.waitForSelector("#voter-name");
    const person = {
        name: await page.evaluate(() => document.querySelector("#voter-name").innerHTML),
        phone: await page.evaluate(() => document.querySelector("#main_phone").innerHTML),
        info: await page.evaluate(() => document.querySelector("#ember398 > div.caller-info > div.voter-block.current > div.voter-info > div.row > div:nth-child(1) > p").innerHTML),

    }
    await browser.close();
    await res.status(200).send(person);

}
catch(error)
{
    console.log(error);
}
}