/* eslint-disable max-nested-callbacks */

import {
    expect
} from 'chai';

let expectedToMatch,
    expectedToNotMatch;

expectedToMatch = [
    'http://foo.com/blah_blah',
    'http://foo.com/blah_blah/',
    'http://foo.com/blah_blah_(wikipedia)',
    'http://foo.com/blah_blah_(wikipedia)_(again)',
    'http://www.example.com/wpstyle/?p=364',
    'https://www.example.com/foo/?bar=baz&inga=42&quux',
    'http://✪df.ws/123',
    'http://userid:password@example.com:8080',
    'http://userid:password@example.com:8080/',
    'http://userid@example.com',
    'http://userid@example.com/',
    'http://userid@example.com:8080',
    'http://userid@example.com:8080/',
    'http://userid:password@example.com',
    'http://userid:password@example.com/',
    'http://142.42.1.1/',
    'http://142.42.1.1:8080/',
    'http://➡.ws/䨹',
    'http://⌘.ws',
    'http://⌘.ws/',
    'http://foo.com/blah_(wikipedia)#cite-1',
    'http://foo.com/blah_(wikipedia)_blah#cite-1',
    'http://foo.com/unicode_(✪)_in_parens',
    'http://foo.com/(something)?after=parens',
    'http://☺.damowmow.com/',
    'http://code.google.com/events/#&product=browser',
    'http://j.mp',
    'ftp://foo.bar/baz',
    'http://foo.bar/?q=Test%20URL-encoded%20stuff',
    'http://مثال.إختبار',
    'http://例子.测试',
    'http://उदाहरण.परीक्षा',
    'http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com',
    'http://1337.net',
    'http://a.b-c.de',
    'http://a.b--c.de/',

    'http://5.0.0.1',
    'http://5.0.0.254',
    'http://5.0.125.1',
    'http://5.0.125.254',
    'http://5.0.255.1',
    'http://5.0.255.125',
    'http://5.0.255.254',

    'http://25.0.0.1',
    'http://25.0.0.254',
    'http://25.0.125.1',
    'http://25.0.125.254',
    'http://25.0.255.1',
    'http://25.0.255.125',
    'http://25.0.255.254',

    'http://223.0.0.1',
    'http://223.0.0.254',
    'http://223.0.125.1',
    'http://223.0.125.254',
    'http://223.0.255.1',
    'http://223.0.255.125',
    'http://223.0.255.254',

    'http://223.125.0.1',
    'http://223.125.0.254',
    'http://223.125.125.1',
    'http://223.125.125.254',
    'http://223.125.255.1',
    'http://223.125.255.125',
    'http://223.125.255.254',

    'http://223.255.0.1',
    'http://223.255.0.254',
    'http://223.255.125.1',
    'http://223.255.125.254',
    'http://223.255.255.1',
    'http://223.255.255.125',
    'http://223.255.255.254'
];

expectedToNotMatch = [
    'http://',
    'http://.',
    'http://..',
    'http://../',
    'http://?',
    'http://??',
    'http://??/',
    'http://#',
    'http://##',
    'http://##/',
    'http://foo.bar?q=Spaces should be encoded',
    '//',
    '//a',
    '///a',
    '///',
    'http:///a',
    'foo.com',
    'rdar://1234',
    'h://test',
    'http:// shouldfail.com',
    ':// should fail',
    'http://foo.bar/foo(bar)baz quux',
    'ftps://foo.bar/',
    'http://-error-.invalid/',
    'http://-a.b.co',
    'http://a.b-.co',
    'http://0.0.0.0',
    'http://10.1.1.0',
    'http://10.1.1.1',
    'http://10.1.1.125',
    'http://10.1.1.254',
    'http://10.1.1.255',
    'http://10.255.255.255',

    'http://172.16.0.0',
    'http://172.16.0.1',
    'http://172.16.0.254',
    'http://172.16.0.255',
    'http://172.16.125.0',
    'http://172.16.125.1',
    'http://172.16.125.254',
    'http://172.16.125.255',
    'http://172.16.255.0',
    'http://172.16.255.1',
    'http://172.16.255.125',
    'http://172.16.255.254',
    'http://172.16.255.255',

    'http://172.24.0.0',
    'http://172.24.0.1',
    'http://172.24.0.254',
    'http://172.24.0.255',
    'http://172.24.125.0',
    'http://172.24.125.1',
    'http://172.24.125.254',
    'http://172.24.125.255',
    'http://172.24.255.0',
    'http://172.24.255.1',
    'http://172.24.255.125',
    'http://172.24.255.254',
    'http://172.24.255.255',

    'http://172.31.0.0',
    'http://172.31.0.1',
    'http://172.31.0.254',
    'http://172.31.0.255',
    'http://172.31.125.0',
    'http://172.31.125.1',
    'http://172.31.125.254',
    'http://172.31.125.255',
    'http://172.31.255.0',
    'http://172.31.255.1',
    'http://172.31.255.125',
    'http://172.31.255.254',
    'http://172.31.255.255',

    'http://192.168.1.0',
    'http://192.168.1.1',
    'http://192.168.1.125',
    'http://192.168.1.254',
    'http://192.168.1.255',
    'http://192.168.255.0',
    'http://192.168.255.1',
    'http://192.168.255.125',
    'http://192.168.255.254',
    'http://192.168.255.255',

    'http://224.1.1.1',
    'http://1.1.1.1.1',
    'http://123.123.123',
    'http://3628126748',
    'http://.www.foo.bar/',
    'http://www.foo.bar./',
    'http://.www.foo.bar./'
];

describe('URLRegExp', () => {
    let URLRegExp;

    beforeEach(() => {
        /* eslint-disable global-require, import/no-require */
        URLRegExp = require('../src/url-regexp.js').default;
        /* eslint-enable global-require, import/no-require */
    });

    describe('.validate()', () => {
        expectedToMatch.forEach((url) => {
            it('passes ' + url, () => {
                expect(URLRegExp.validate(url)).to.equal(true);
            });
        });

        expectedToNotMatch.forEach((url) => {
            it('fails ' + url, () => {
                expect(URLRegExp.validate(url)).to.equal(false);
            });
        });
    });

    describe('.match()', () => {
        it('matches', () => {
            expect(URLRegExp.match(expectedToMatch.join(' '))).to.deep.equal(expectedToMatch);
        });
        it('does not match', () => {
            expect(URLRegExp.match(expectedToNotMatch.join(' '))).to.deep.equal([]);
        });
        it('matches unique URLs', () => {
            expect(URLRegExp.match('http://foo.com http://foo.com http://bar.com')).to.deep.equal(['http://foo.com', 'http://bar.com']);
        });
    });

    describe('.replace()', () => {
        let replaceWith;

        replaceWith = 'new-value';

        expectedToMatch.forEach((url) => {
            it('replaces ' + url, () => {
                let expectedValue;

                expectedValue = URLRegExp.replace(url, replaceWith);
                expect(expectedValue).to.equal(replaceWith);
            });
        });

        it('replaces multiple urls at once', () => {
            let actualValue,
                expectedValue;

            expectedValue = '';
            expectedToMatch.forEach(() => {
                expectedValue += replaceWith + ' ';
            });
            expectedValue = expectedValue.trim();

            actualValue = URLRegExp.replace(expectedToMatch.join(' '), replaceWith);

            expect(actualValue).to.equal(expectedValue);
        });

        expectedToNotMatch.forEach((url) => {
            it('fails ' + url, () => {
                let expectedValue;

                expectedValue = URLRegExp.replace(url, replaceWith);
                expect(expectedValue).to.equal(url);
            });
        });

        it('does not replace multiple urls at once', () => {
            let actualValue,
                expectedValue;

            expectedValue = expectedToNotMatch.join(' ');
            actualValue = URLRegExp.replace(expectedValue, replaceWith);

            expect(actualValue).to.equal(expectedValue);
        });
    });
});
