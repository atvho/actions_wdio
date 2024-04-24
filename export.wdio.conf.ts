import { baseConfig } from "./base.wdio.conf.ts";
    
export const config: WebdriverIO.Config = {
    ...baseConfig,
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless'
            ],
            prefs: {
              'intl.accept_languages': 'en,EN',
              'directory_upgrade': true,
              'download.prompt_for_download': false,
              'download.default_directory': '/home/seluser/Downloads'
            }
        } 
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
        
}
