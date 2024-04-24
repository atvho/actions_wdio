import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DownloadPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get list () {
        return $('#content');
    }

    public get pictures () {
        return this.list.$$('a');
    }

    public open () {
        return super.open('download');
    }
}

export default new DownloadPage();
