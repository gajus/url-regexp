var URLRegExp = {},
    URLRegEx,
    one,
    many;

/**
 * @author https://gist.github.com/dperini/729294
 */
URLRegEx =
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
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
        // filter 2. and 3. part for 0-255
        '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
        // filter 4. part for 1-254
        '(?:\\.(?:25[0-4]|[1-9]\\d?|1\\d\\d|2[0-4]\\d))' +
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

one = new RegExp('^' + URLRegEx +'$', 'i');
many = new RegExp(URLRegEx, 'ig');

URLRegExp.validate = function (inputString) {
    return one.test(inputString);
};

URLRegExp.match = function (inputString) {
    var matches = inputString.match(many);

    if (!matches) {
        return [];
    }

    // remove url duplicates
    return matches.filter(function (value, index) {
        return matches.indexOf(value) === index;
    });
};

module.exports = URLRegExp;
