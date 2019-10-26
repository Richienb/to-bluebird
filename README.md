# To Bluebird [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/to-bluebird/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/to-bluebird)

Convert any type of promise to a Bluebird promise

[![NPM Badge](https://nodei.co/npm/to-bluebird.png)](https://npmjs.com/package/to-bluebird)

## Install

```sh
npm install to-bluebird bluebird
```

## Usage

```js
const toBluebird = require("to-bluebird");

const es6Promise = new Promise(resolve => resolve("Hello World!")); // Regular native promise.
const bluebirdPromise = toBluebird(es6Promise); // Bluebird promise.
```

## API

### toBluebird(promise)

#### promise

Type: `PromiseLike`

The promise to convert.
