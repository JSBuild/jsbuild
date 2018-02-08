const path = require('path');
const jsbuild = require('../lib/main');

jsbuild({
  cwd: path.resolve(__dirname, './webpack-main'),
});

jsbuild({
  cwd: path.resolve(__dirname, './webpack-src'),
});

