import { baseConfig } from "./base.wdio.conf.ts";
import path from 'path';
const pathToDownload = path.resolve('exportDownloads');
    
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
            //   'download.default_directory': '/home/seluser/Downloads'
            'download.default_directory': pathToDownload,
            }
        } 
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
        
}
