# validateIt

`validateIt` is a JavaScript validation script.

<!--
![](icon.png)
-->

[validateIt](https://aslamanver.github.io/js-validate-it) | [Create Issue](https://github.com/aslamanver/js-validate-it/issues/new)

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][workflow-image]][workflow-url]

<hr/>

## Usage

```js
const validations = {
    amount: {
    min: { value: 5, message: "min:message" },
    max: { value: 16, message: "max:message" },
    sun: { value: 0, message: "sun:message" },
    },
};

const inputs = {
    amount: 4,
};

const result = validateIt(validations, inputs);
```

[npm-image]: https://img.shields.io/npm/v/js-validate-it.svg
[npm-url]: https://npmjs.org/package/js-validate-it
[downloads-image]: https://img.shields.io/npm/dm/js-validate-it.svg
[downloads-url]: https://npmcharts.com/compare/js-validate-it?minimal=true
[workflow-image]: https://github.com/aslamanver/js-validate-it/actions/workflows/node.js.yml/badge.svg
[workflow-url]: https://github.com/aslamanver/js-validate-it/actions
