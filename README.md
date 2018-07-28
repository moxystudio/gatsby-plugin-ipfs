# gatsby-plugin-ipfs

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[npm-url]:https://npmjs.org/package/gatsby-plugin-ipfs
[npm-image]:http://img.shields.io/npm/v/gatsby-plugin-ipfs.svg
[downloads-image]:http://img.shields.io/npm/dm/gatsby-plugin-ipfs.svg
[david-dm-url]:https://david-dm.org/moxystudio/gatsby-plugin-ipfs
[david-dm-image]:https://img.shields.io/david/moxystudio/gatsby-plugin-ipfs.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/gatsby-plugin-ipfs?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/gatsby-plugin-ipfs.svg
[greenkeeper-image]:https://badges.greenkeeper.io/moxystudio/gatsby-plugin-ipfs.svg
[greenkeeper-url]:https://greenkeeper.io

Adds support for deploying Gatsby to IPFS by ensuring that assets are relative.


## Installation

```sh
$ npm install --save gatsby-plugin-ipfs
```


## Usage

Set `prefixPath` to `.` and include the plugin in your `gatsby-config.js` file:

```js
module.exports = {
    pathPrefix: '.',
    plugins: [
        'gatsby-plugin-ipfs',
    ]
}
```

And now, simply build the project with `npm run build -- --prefix-paths`.


## But how?

It turns out the Gatsby doesn't support relative paths. But I didn't gave up and came up with smart and ugly hacks to do so:

- Adds a postbuild step that iterates over html & assets files and transforms absolute to relative paths
- Sets up the [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) tag to be `/ipfs/xxxx` or `/ipns/xxxx` according to the `window.location` so that relative paths work correctly
- Adds runtime code that sets `basename` of the [`history`](https://github.com/ReactTraining/history) to `/ipfs/xxxx/` or `/ipns/xxxx/` according to the `window.location`
- Adds runtime code that wraps the Gatsby's loader `getResourcesForPathname` to exclude `/ipfs/xxxx` or `/ipns/xxxx` from `paths`


## License

[MIT License](http://opensource.org/licenses/MIT)
