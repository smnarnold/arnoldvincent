const debug = require('gulp-debug');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const prettier = require('gulp-prettier');

const paths = {
  src: ['src/**/*.{js,scss,vue}', '!src/**/vendors/**/*', '!src/scss/abstracts/__variables.scss'],
  dest: 'src',
};

function formatTask() {
  return gulp
    .src(paths.src, { base: paths.dest })
    .pipe(gulpif(global.debug, debug({ title: 'Formating' })))
    .pipe(prettier()) // config file can be found at _frontend/.prettierrc.js
    .pipe(gulp.dest(paths.dest));
}

gulp.task('format', formatTask);
