// import { expect } from '@wdio/globals'
import { expect } from 'chai'
import DownloadPage from '../pageobjects/download.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import path from 'path';
import fsExtra from 'fs-extra';
const pathToChromeDownloads = './exportDownloads';

let createdFile;

describe('FIFTH test export JS application', () => {
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
        const listItem = DownloadPage.pictures[3]
        await listItem.waitForClickable()
        await listItem.click()
        await browser.pause(1000)
        expect(await SecurePage.flashAlert.isExisting()).to.be.true
    })

    it('should verify if file is downloaded', async () => {
        await browser.pause(1000)
        createdFile = fsExtra.readdirSync(pathToChromeDownloads);
        console.log(`CREATED FILE ${createdFile}`);
        let comparePath = `${pathToChromeDownloads}/${createdFile}`
        let filePath = fsExtra.existsSync(comparePath)
        console.log(`COMPARE PATH ${comparePath}`);
        console.log(`FILE BOOLEAN ${filePath}`);
        expect(filePath).to.be.true;
        expect(createdFile[0]).to.have.string('.png');
    })

    it('should verify file size', async () => {
        const stats = fsExtra.statSync(path.join(pathToChromeDownloads, createdFile[0]));
        expect(stats.size > 0).to.be.true;
    })
})

