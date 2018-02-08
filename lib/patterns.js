/**
 * PATTERNS
 * ------------------------------------
 * The goal with patterns.js is to use
 * directory and path pattens to select
 * a strategy to compile the Javascript
 * assets.
 * ------------------------------------
 * @type {*[]}
 */

module.exports = [
   { recipe: 'webpack-main',  glob: './main.js'     }
  ,{ recipe: 'webpack-src',   glob: './src/main.js' }
  ,{ recipe: 'vue-main',      glob: './app.vue'     }
  ,{ recipe: 'vue-src',       glob: './src/app.js'  }
];