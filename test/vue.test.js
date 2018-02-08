const path = require('path');
const jsbuild = require('../lib/main');

jsbuild({
  cwd: path.resolve(__dirname, './vue-main'),
});

jsbuild({
  cwd: path.resolve(__dirname, './vue-src'),
});