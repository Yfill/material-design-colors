# [Material design colors](https://yfill.cn/material-design-colors)

[![GitHub license][mit]][mit-url]
[![Code Style][code-style]][code-style-url]
[![NPM Package][npm]][npm-url]
[![Monthly Downloads][md]][md-url]
[![Build Size][build-size]][build-size-url]
[![Dependencies Status][dependencies-status]][dependencies-status-url]
[![DevDependencies Status][dev-dependencies-status]][dev-dependencies-status-url]

A theme extension.

## Install

using npm:

```sh
npm install @yfill/material-design-colors --save
```

or using yarn:

```sh
yarn add @yfill/material-design-colors
```

## Usage

- Import resources and use the use method to install, set the color( red / pink / purple / deep-purple / indigo / blue / light-blue / cyan / teal / green / light-green / lime / yellow / amber / orange / deep-range / brown / gray / blue-gray ).

  ```js
  import Theme from "@yfill/theme";
  import MaterialDesignColors from "@yfill/material-design-colors";
  Theme.run().use(MaterialDesignColors, "blue");
  ```

  ```html
  <script src="https://unpkg.com/@yfill/theme"></script>
  <script src="https://unpkg.com/@yfill/material-design-colors"></script>
  <script>
    Theme.run().use(MaterialDesignColors, "blue");
  </script>
  ```
[mit]:https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]:https://github.com/Yfill/material-design-colors/blob/main/LICENSE
[code-style]: https://img.shields.io/badge/code_style-airbnb-brightgreen
[code-style-url]: https://www.npmjs.com/package/eslint-config-airbnb
[md]: https://badgen.net/npm/dm/@yfill/material-design-colors
[md-url]: https://npmcharts.com/compare/@yfill/material-design-colors?minimal=true
[npm]: https://img.shields.io/npm/v/@yfill/material-design-colors.svg
[npm-url]: https://www.npmjs.com/package/@yfill/material-design-colors
[build-size]: https://badgen.net/bundlephobia/minzip/@yfill/material-design-colors
[build-size-url]: https://bundlephobia.com/result?p=@yfill/material-design-colors
[dependencies-status]: https://david-dm.org/Yfill/material-design-colors/status.svg
[dependencies-status-url]: https://david-dm.org/Yfill/material-design-colors
[dev-dependencies-status]: https://david-dm.org/Yfill/material-design-colors/dev-status.svg
[dev-dependencies-status-url]: https://david-dm.org/Yfill/material-design-colors?type=dev