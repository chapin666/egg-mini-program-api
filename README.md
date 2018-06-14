# egg-mini-program-api

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mini-program-api.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mini-program-api
[travis-image]: https://img.shields.io/travis/eggjs/egg-mini-program-api.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mini-program-api
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mini-program-api.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mini-program-api?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mini-program-api.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mini-program-api
[snyk-image]: https://snyk.io/test/npm/egg-mini-program-api/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mini-program-api
[download-image]: https://img.shields.io/npm/dm/egg-mini-program-api.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mini-program-api

<!--
Description here.
-->

## Install

```bash
$ npm i egg-mini-program-api --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.miniProgramApi = {
  enable: true,
  package: 'egg-mini-program-api',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.miniProgramApi = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
