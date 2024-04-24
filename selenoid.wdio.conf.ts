import { baseConfig } from "./base.wdio.conf.ts";
    
export const config: WebdriverIO.Config = {
    ...baseConfig,
    maxInstances: 3,
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome', 
        'goog:chromeOptions': {
            args: [
                '--window-size=1920,1080',
                // '--headless'
            ],
            prefs: {
              'directory_upgrade': true,
              'prompt_for_download': false,
              'profile.content_settings.exceptions.clipboard' : {
                "[*.],*": {
                  "setting": 1
                }
              }
            }
        }
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
        
}
