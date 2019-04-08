const gulp           = require('gulp');
const gulpif         = require('gulp-if');
const handleErrors   = require('../lib/handleErrors');
const log            = require('fancy-log');
const path           = require('path');
const plumber        = require('gulp-plumber');
const sizereport     = require('gulp-sizereport');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack        = require('webpack');
const webpackStream  = require('webpack-stream');

let paths = {
  src: path.join(global.paths.assets.src, 'js/app.js'),
  dest: path.join(global.paths.assets.dest, 'js'),
};

let scriptsTask = function () {
  return gulp.src(paths.src)
    .on('error', handleErrors)
    .pipe(gulpif(!global.production, plumber()))
    .pipe(webpackStream({
      cache: !global.production,
      devtool: global.production ? false : 'inline-source-map',
      externals: {
        jquery: 'jQuery',
      },
      mode: global.production ? 'production' : 'development',
      module: {
        rules: [
          {
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              presets: [['@babel/env', { // '@babel/preset-env'
                // debug: true,
                targets: 'last 2 versions',
              }]],
            },
            test: /\.js$/,
          },
        ],
      },
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: false,
          minimize: true,
        }),
      ],
      output: {filename: path.basename(paths.src)},
    }, webpack, function (err, stats) {
      if (err) {
        log.error(err);
      }
    }))
    .pipe(sizereport({gzip: true, total: false}))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('scripts', scriptsTask);
module.exports = scriptsTask;
