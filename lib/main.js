const fs = require('fs');
const path = require('path');
const defaultRecipe = 'webpack';
const moduleDir = (__dirname.includes(process.cwd()) ? process.cwd() : __dirname) + '/node_modules/';

module.exports = function (opts) {
  const cwd = path.resolve(opts.cwd || __dirname);
  const recipe = resolveRecipe(opts);
  const recipeFunct = require(recipe);

  opts.cwd = cwd;
  opts.moduleDir = moduleDir;

  console.log('Module Directory: %s', opts);

  if(!recipeFunct) {
    throw new Error('The recipe ' + recipe +' has not been installed. Try `npm install -g ' + recipe + '`');
  }

  recipeFunct(opts);
}

function resolveRecipe(opts) {
  let recipe = 'jsbuild-recipe-' + (opts.recipe || defaultRecipe);

  if(fs.existsSync(path.resolve(__dirname, recipe + '.js'))) {
    recipe = './' + recipe
  }

  return recipe;
}
