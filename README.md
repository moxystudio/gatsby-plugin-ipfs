# gatsby-plugin-ipfs

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[npm-url]:https://npmjs.org/package/gatsby-plugin-ipfs
[npm-image]:https://img.shields.io/npm/v/gatsby-plugin-ipfs.svg
[downloads-image]:https://img.shields.io/npm/dm/gatsby-plugin-ipfs.svg
[david-dm-url]:https://david-dm.org/moxystudio/gatsby-plugin-ipfs
[david-dm-image]:https://img.shields.io/david/moxystudio/gatsby-plugin-ipfs.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/gatsby-plugin-ipfs?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/gatsby-plugin-ipfs.svg
[greenkeeper-image]:https://badges.greenkeeper.io/moxystudio/gatsby-plugin-ipfs.svg
[greenkeeper-url]:https://greenkeeper.io

Adds support for deploying [Gatsby](https://www.gatsbyjs.org/) websites to [IPFS](https://ipfs.io/) by ensuring that assets are relative.


## Installation

```sh
$ npm install --save gatsby-plugin-ipfs
```


## Usage

Set `prefixPath` to `__GATSBY_IPFS_PATH_PREFIX__` and include the plugin in your `gatsby-config.js` file:

```js
module.exports = {
    pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
    plugins: [
        'gatsby-plugin-ipfs',
    ]
}
```

And now, simply build the project with `npm run build -- --prefix-paths`. Better yet, set it by default in your `package.json`:

```json
"scripts": {
  "build": "gatsby build --prefix-paths"
},
```


## But how?

It turns out the Gatsby doesn't support relative paths. But I didn't gave up and came up with smart and ugly hacks to do so:

- Adds a post-build step that iterates over files and transforms every `__GATSBY_IPFS_PATH_PREFIX__` occurrence
- Adds a very small code snippet to every HTML page that defines the `__GATSBY_IPFS_PATH_PREFIX__` global based on the browser location


## License

[MIT License](http://opensource.org/licenses/MIT)
