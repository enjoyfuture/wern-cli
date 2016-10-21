// To get normal classnames instead of CSS Modules classnames for testing
// As noted above, this package makes use of the --harmony-proxies option.
// This means that however you start node, you'll need to pass that option.
const mockCssModules = require('mock-css-modules');

// By default, mock-css-modules will handle require()d .css files.
// If your project has some other extensions (such as .sass, .scss, etc),
// you'll need to register handlers for those, too:
mockCssModules.register(['.css', '.scss']);

// Ignore assets
require.extensions['.jpg'] = noop => noop;
require.extensions['.jpeg'] = noop => noop;
require.extensions['.png'] = noop => noop;
require.extensions['.gif'] = noop => noop;
require.extensions['.svg'] = noop => noop;

require('babel-register');
require('babel-polyfill');

global.document = require('jsdom').jsdom('<body></body>');
global.window = document.defaultView;
global.location = document.location;
global.navigator = window.navigator;
