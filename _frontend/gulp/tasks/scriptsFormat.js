const gulp         = require('gulp');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');
const prettier     = require('gulp-prettier');

let paths = {
  src: path.join(global.paths.assets.src, 'js/**/*.js'),
  dest: path.join(global.paths.assets.src, 'js'),
};

let scriptsFormatTask = function () {
  return gulp.src(paths.src)
    .on('error', handleErrors)
    .pipe(prettier({
      // config file can be found at _frontend/.prettierrc.js
    }))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('scriptsFormat', scriptsFormatTask);
module.exports = scriptsFormatTask;
