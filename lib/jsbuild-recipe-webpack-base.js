const path = require('path');
const webpack = require('webpack');

module.exports = function (opts) {
  webpack({
    entry: path.resolve(opts.src, opts.fileName),
    output: {
      path: opts.dist,
      filename: opts.library.toLowerCase() + '.js', // string
      library: opts.library,
      libraryTarget: "window",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              //presets: ['@babel/preset-env']
              presets: [path.resolve(opts.jsbuild.moduleDir, 'babel-preset-env')]
            }
          }
        }
      ]
    }
  }, (err, stats) => {

    if (err || stats.hasErrors()) {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }

      return;
    }

    console.log(stats.toString({
      colors: true
    }));
  });
}