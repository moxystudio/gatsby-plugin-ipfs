'use strict';

(function () {
    var ipfsPathRegExp = /^(\/(?:ipfs|ipns)\/[^/]+)/;
    var ipfsPathPrefix = (window.location.pathname.match(ipfsPathRegExp) || [])[1] || '';

    window.__GATSBY_IPFS_PATH_PREFIX__ = ipfsPathPrefix;
})();
