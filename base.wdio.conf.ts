import type { Options } from '@wdio/types';
import { testSuites } from "./suites.ts";
import { browser } from '@wdio/globals';
import { ReportAggregator } from 'wdio-html-nice-reporter';

let reportAggregator : ReportAggregator;

export const baseConfig: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        './test/specs/**/*.ts'
    ],
    suites: {
        ...testSuites
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    // maxInstances: 1,
    capabilities: [{
        // browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevel: 'error',
    bail: 0,
    // baseUrl: process.env.CLOUD === 'true'
    //     ? process.env.CLOUD_WEBSITE
    //     : 'http://tomcat.build.luy.tools:8080/luy-automateFF/client-new/',
    waitforTimeout: 1000,
    connectionRetryTimeout: 12000,
    connectionRetryCount: 3,
    // services: [],
    framework: 'mocha',
    reporters: ['spec',
                ['html-nice', {
                    outputDir: './reports/html-reports/',
                    filename: 'report.html',
                    reportTitle: 'Single Report Title',
                    linkScreenshots: true,
                    //to show the report in a browser when done
                    // showInBrowser: true,
                    // collapseTests: true,
                    //to turn on screenshots after every test
                    useOnAfterCommandForScreenshot: true
                }
                ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // =====
    // Hooks
    // =====
    // onPrepare: function (config, capabilities) {
    // },
    onPrepare: function (config, capabilities) {
        reportAggregator = new ReportAggregator(
            {
                outputDir: './reports/html-reports/',
                filename: 'master-report.html',
                reportTitle: 'Suite Test Report',
                browserName: 'Chrome',
                collapseSuites: true,
            });

        reportAggregator.clean();
    },
    // before: function (capabilities, specs) {
    //     browser.overwriteCommand('clearValue', async function (this: any) {
    //         await this.waitForDisplayed();

    //         await browser.execute(element => {
    //             element.focus();
    //             element.select();
    //         }, this);

    //         await browser.keys('\uE003');
    //     }, true);
    //     // action for activation developer mode toggle
    //     browser.execute('localStorage.setItem("DEV_MODE_ENABLED", "true")');
    // },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
    onComplete: function (exitCode, config, capabilities, results) {
        (async () => {
            await reportAggregator.createReport();
        })();
    }

}
