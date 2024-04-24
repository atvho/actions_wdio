/**
 * Configuration for running tests locally against a remote instance running on the build server.
 * The remote instance should be available under http://tomcat.build.luy.tools:8080/luy-automateFF
 */    
import { baseConfig } from "./base.wdio.conf.ts";
    
export const config: WebdriverIO.Config = {
    ...baseConfig,
    maxInstances: 5,
    capabilities: [{
        maxInstances: 3,
        browserName: 'chrome',
        'goog:chromeOptions': {
            // args: ['--headless'],
            prefs: {
                'intl.accept_languages': 'en,EN',
                'profile.content_settings.exceptions.clipboard' : {
                    "[*.],*": {
                      "setting": 1
                    }
                }
            }
        },
        acceptInsecureCerts: true
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    
}
