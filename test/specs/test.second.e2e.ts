import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Second test application', () => {
    it('should login second', async () => {
        await LoginPage.open()

    })

    it('should login second with invalid credentials', async () => {

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.login('tomsmith', 'Super')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
})

