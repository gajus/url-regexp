## URL RegExp

[![Build Status](https://travis-ci.org/gajus/deadlink.png?branch=master)](https://travis-ci.org/gajus/deadlink)
[![NPM version](https://badge.fury.io/js/deadlink.svg?cache1)](http://badge.fury.io/js/deadlink)

## Usage

```js
var URLRegExp = require('url-regexp');
```

## Validate URL

```js
URLRegExp.one.test('input string');
```

## Match URLs

```js
'input string'.match(URLRegExp.many());
```

## Download

Download using [NPM](https://www.npmjs.org/):

```sh
npm install url-regexp --save
```