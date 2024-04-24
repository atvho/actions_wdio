import { expect } from '@wdio/globals'
import DownloadPage from '../pageobjects/download.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Fourth test export application', () => {
    it('should open download page', async () => {
        await DownloadPage.open()
    })

    it('should click to download picture', async () => {
        await DownloadPage.list.waitForDisplayed()
        await DownloadPage.pictures[1].waitForClickable()
        await DownloadPage.pictures[1].click()
        await browser.pause(2000)
        await expect(SecurePage.flashAlert).toBeExisting()
    })
})

