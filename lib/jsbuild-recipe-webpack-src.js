const fs = require('fs');
const path = require('path');
const webpackBuild = require('./jsbuild-recipe-webpack-base');


module.exports = function (opts) {
  const src = path.resolve(opts.cwd, 'src');
  const dist = path.resolve(opts.cwd, 'dist');
  const fileName = 'main.js';
  const library = 'App';

  console.log('Building with configuration');
  console.log('src: %s', src);
  console.log('dist: %s', dist);

  webpackBuild({src, dist, fileName, library, jsbuild: opts});
}
