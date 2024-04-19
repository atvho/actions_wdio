import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Second My Login application', () => {
    it('should login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmithth', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        expect(SecurePage.flashAlert).toHaveText(expect.stringContaining('You logged into a secure area!'))
    })
})

