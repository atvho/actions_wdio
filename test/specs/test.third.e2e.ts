import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Third test application', () => {
    it('should login third', async () => {
        await LoginPage.open()

    })

    it('should login with invalid verification', async () => {

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await LoginPage.login('tomsmith', 'Super')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining('blabla')
    })
})

