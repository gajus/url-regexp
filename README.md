<h2 id="url-regexp">URL RegExp</h2>

[![Travis build status](http://img.shields.io/travis/renarsvilnis/url-regexp/master.svg?style=flat)](https://travis-ci.org/renarsvilnis/url-regexp)
[![NPM version](http://img.shields.io/npm/v/url-regexp.svg?style=flat)](https://www.npmjs.org/package/url-regexp)

RegExp object to match and validate URL(s).

<h2 id="usage">Usage</h2>

```js
var URLRegExp = require('url-regexp');
```

<h3 id="usage-validate-url">Validate URL</h3>

```js
URLRegExp.validate('input string');
```

<h3 id="usage-match-urls">Match URLs</h3>

`URLRegExp.match()` will return all valid URLs from the string.

```js
URLRegExp.match('input string');
```

<h3 id="usage-replace-urls">Replace URLs</h3>

`URLRegExp.replace()` will replace all url instances depending on the passed replacment string or function identical as [`String.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

```js
var strWithUrls = 'John favorite website is http://twitter.com';
URLRegExp.replace(strWithUrls, 'twitter');
// John favorite website is twitter
```

<h2 id="download">Download</h2>

Download using [NPM](https://www.npmjs.org/):

```sh
npm install --save url-regexp
```
