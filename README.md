## URL RegExp

[![Travis build status](http://img.shields.io/travis/gajus/url-regexp/master.svg?style=flat)](https://travis-ci.org/gajus/url-regexp)
[![NPM version](http://img.shields.io/npm/v/url-regexp.svg?style=flat)](https://www.npmjs.org/package/url-regexp)

RegExp object to match and validate URL(s).

## Usage

```js
var URLRegExp = require('url-regexp');
```

### Validate URL

```js
URLRegExp.validate('input string');
```

### Match URLs

`URLRegExp.match()` will return all valid URLs from the string.

```js
URLRegExp.match('input string');
```

### Replace URLs

`URLRegExp.replace()` will replace all url instances depending on the passed replacment string or function identical as [`String.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

```js
var strWithUrls = 'John favorite website is http://twitter.com';
URLRegExp.replace(strWithUrls, 'twitter');
// John favorite website is twitter
```

## Download

Download using [NPM](https://www.npmjs.org/):

```sh
npm install --save url-regexp
```
