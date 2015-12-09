/* jslint node: true */
"use strict"; 

var URLRegExp = {};

/**
 * @author https://gist.github.com/dperini/729294
 */
var URLRegEx =
    // protocol identifier
    '(?:(?:https?|ftp)://)' +

    // user:pass authentication
    '(?:\\S+(?::\\S*)?@)?' +

    '(?:' +
        // IP address exclusion - private & local networks
        // Reference: https://www.arin.net/knowledge/address_filters.html
        
        // filter 10.*.*.* and 127.*.*.* adresses
        '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +

        // filter 169.254.*.* and 192.168.*.*
        '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +

        // filter 172.16.0.0 - 172.31.255.255
        // TODO: add test to validate that it invalides address in 16-31 range
        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +

        // IP address dotted notation octets
        // excludes loopback network 0.0.0.0
        // excludes reserved space >= 224.0.0.0
        // excludes network & broacast addresses
        // (first & last IP address of each class)

        // filter 1. part for 1-223
        '(?:22[0-3]|2[01]\\d|[1-9]\\d?|1\\d\\d)' +
        // filter 2. and 3. part for 0-255
        '(?:\\.(?:25[0-5]|2[0-4]\\d|1?\\d{1,2})){2}' +
        // filter 4. part for 1-254
        '(?:\\.(?:25[0-4]|2[0-4]\\d|1\\d\\d|[1-9]\\d?))' +
    '|' +
        // host name
        '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)' +

        // domain name
        '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*' +

        // TLD identifier
        '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))' +
    ')' +

    // port number
    '(?::\\d{2,5})?' +

    // resource path
    '(?:/\\S*)?';

var one = new RegExp('^' + URLRegEx +'$', 'i');
var many = new RegExp(URLRegEx, 'ig');

URLRegExp.validate = function (inputString) {
    return one.test(inputString);
};

URLRegExp.match = function (inputString) {
    var matches = inputString.match(many);

    if (!matches) {
        return [];
    }

    // Remove url duplicates by a lookup taple
    // Reference: http://stackoverflow.com/a/9229821/1378261
    var seen = {};
    return matches.filter(function (url) {
        return seen.hasOwnProperty(url) ? false : (seen[url] = true);
    });
};

module.exports = URLRegExp;
