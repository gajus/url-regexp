## URL RegExp

[![Build Status](https://travis-ci.org/gajus/url-regexp.png?branch=master)](https://travis-ci.org/gajus/url-regexp)
[![NPM version](https://badge.fury.io/js/url-regexp.svg?cache1)](http://badge.fury.io/js/url-regexp)

RegExp object to match and validate URL(s).

## Usage

```js
var URLRegExp = require('url-regexp');
```

## Validate URL

```js
URLRegExp.validate('input string');
```

## Match URLs

`URLRegExp.match()` will return all valid URLs from the string.

```js
URLRegExp.match('input string');
```

## Download

Download using [NPM](https://www.npmjs.org/):

```sh
npm install url-regexp --save
```