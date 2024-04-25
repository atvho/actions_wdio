import { expect } from '@wdio/globals'
import DownloadPage from '../pageobjects/download.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Fourth test export application', () => {
    it('should open download page', async () => {
        await DownloadPage.open()
    })

    it('should click to download picture', async () => {
        await DownloadPage.list.waitForDisplayed()
        const listItem = DownloadPage.pictures[0]
        await listItem.waitForClickable()
        await listItem.click()
        await browser.pause(1000)
        await expect(SecurePage.flashAlert).toBeExisting()
    })
})

