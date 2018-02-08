const fs = require('fs');
const path = require('path');

module.exports = function (opts) {
  let recipeFunc;

  if(fs.existsSync(path.resolve(opts.cwd, 'main.js'))) {
    recipeFunc = require('./jsbuild-recipe-webpack-main');
  } else if(fs.existsSync(path.resolve(opts.cwd, './src/main.js'))) {
    recipeFunc = require('./jsbuild-recipe-webpack-src');
  }

  recipeFunc(opts);
}