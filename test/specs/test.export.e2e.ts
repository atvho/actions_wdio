// import { expect } from '@wdio/globals'
import { expect } from 'chai'
import DownloadPage from '../pageobjects/download.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import fsExtra from 'fs-extra';
const pathToChromeDownloads = './exportDownloads';

describe('Fourth test export application', () => {
    before(() => {
        // Clean up the chromeDownloads folder and create a fresh one
        fsExtra.removeSync(pathToChromeDownloads);
        fsExtra.mkdirsSync(pathToChromeDownloads);
    });

    it('should open download page', async () => {
        await DownloadPage.open()
    })

    it('should click to download picture', async () => {
        await DownloadPage.list.waitForDisplayed()
        const listItem = DownloadPage.pictures[0]
        await listItem.waitForClickable()
        await listItem.click()
        await browser.pause(1000)
        expect(await SecurePage.flashAlert.isExisting()).to.be.true
    })

    it('should verify if file is downloaded', async () => {
        await browser.pause(1000)
        let comparePath = `${pathToChromeDownloads}/screenshots.jpg`
        let file = fsExtra.existsSync(comparePath)
        console.log(`COMPARE PATH ${comparePath}`);
        console.log(`FILE BOOLEAN ${file}`);
        const createdFile = fsExtra.readdirSync(pathToChromeDownloads);
        console.log(`CREATED FILE ${createdFile}`);
        expect(createdFile[0]).to.have.string('.jpg');
        
    })
})
