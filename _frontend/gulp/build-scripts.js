const browserSync = require('browser-sync');
const debug = require('gulp-debug');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const log = require('fancy-log');
const plumber = require('gulp-plumber');
const sizereport = require('gulp-sizereport');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackConfig = require('../webpack.config.js');

const isDev = process.env.NODE_ENV === 'development';

const paths = {
  src: 'src/js/app.js',
  dest: `${global.paths.dist}/js`,
};

function buildScriptsTask() {
  return gulp
    .src(paths.src)
    .pipe(gulpif(global.debug, debug({ title: 'Building' })))
    .pipe(gulpif(isDev, plumber()))
    .pipe(
      webpackStream(webpackConfig, webpack, (err) => {
        if (err) log.error(err);
      }),
    )
    .pipe(sizereport({ gzip: true, total: false }))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(isDev, browserSync.stream()));
}

gulp.task('build:scripts', buildScriptsTask);
