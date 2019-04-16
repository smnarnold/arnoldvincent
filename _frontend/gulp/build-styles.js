const browserSync = require('browser-sync');
const debug = require('gulp-debug');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sizereport = require('gulp-sizereport');

const isDev = process.env.NODE_ENV === 'development';

const paths = {
  src: 'src/scss/main.scss',
  dest: `${global.paths.dist}/css`,
};

function buildStylesTask() {
  return gulp
    .src(paths.src, { sourcemaps: isDev })
    .pipe(gulpif(global.debug, debug({ title: 'Building' })))
    .pipe(gulpif(isDev, plumber()))
    .pipe(sassGlob())
    .pipe(sass({ indentedSyntax: false }))
    .pipe(postcss()) // config file can be found at _frontend/.postcssrc.js
    .pipe(sizereport({ gzip: true, total: false }))
    .pipe(gulp.dest(paths.dest, { sourcemaps: isDev }))
    .pipe(gulpif(isDev, browserSync.stream()));
}

gulp.task('build:styles', buildStylesTask);
