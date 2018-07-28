'use strict';

const globby = require('globby');
const fs = require('fs');

// Note: even with `prefixPath` set to `./`, gatsby outputs everything with `/./`
// The functions below attempts to fix all the links so that they work as they should

const relativizeHtmls = async () => {
    // Replaces all "/./xxxx" and (/./yyyy) strings with the correct relative paths
    // based on the depth of the HTML file within the `public/` folder
    const paths = await globby(['public/**/*.html']);

    paths.forEach((path) => {
        const depth = path.split('/').length - 2;
        const relativePrefix = depth > 0 ? '../'.repeat(depth) : './';

        let contents = fs.readFileSync(path).toString();

        contents = contents
        .replace(/(["(])\/\.\/([^"]*?)([")])/g, (matches, g1, g2, g3) => g1 + relativePrefix + g2 + g3);

        fs.writeFileSync(path, contents);
    });
};

const relativizeAssets = async () => {
    // Replaces all "/./xxxx", (/./yyyy) and "webpack:///./zzzz" strings
    // with the correct relative paths
    const paths = await globby(['public/*']);

    paths.forEach((path) => {
        let contents = fs.readFileSync(path).toString();

        contents = contents
        .replace(/(["(/])\/\.\/([^"]*?)([")])/g, (matches, g1, g2, g3) => g1 + g2 + g3);

        fs.writeFileSync(path, contents);
    });
};

exports.onPostBuild = async () => {
    await relativizeHtmls();
    await relativizeAssets();
};
