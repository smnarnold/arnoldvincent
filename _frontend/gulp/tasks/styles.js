const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const cssnano      = require('gulp-cssnano');
const gulpif       = require('gulp-if');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const sizereport   = require('gulp-sizereport');
const sourcemaps   = require('gulp-sourcemaps');

let paths = {
  src: path.join(global.paths.assets.src, 'scss/*.scss'),
  dest: path.join(global.paths.assets.dest, 'css'),
};

let stylesTask = function () {
  return gulp.src(paths.src)
    .on('error', handleErrors)
    .pipe(gulpif(!global.production, plumber()))
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .pipe(sassGlob())
    .pipe(sass({'indentedSyntax': false}))
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(cssnano({autoprefixer: false}))
    .pipe(gulpif(!global.production, sourcemaps.write()))
    .pipe(sizereport({gzip: true, total: false}))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif(!global.production, browserSync.stream()));
};

gulp.task('styles', stylesTask);
module.exports = stylesTask;
