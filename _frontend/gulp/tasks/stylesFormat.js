const gulp         = require('gulp');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');
const prettier     = require('gulp-prettier');

let paths = {
  src: path.join(global.paths.assets.src, 'scss/!(abstracts|vendors)/**/*.scss'),
  dest: path.join(global.paths.assets.src, 'scss'),
};

let stylesFormatTask = function () {
  return gulp.src(paths.src, {base: paths.dest})
    .on('error', handleErrors)
    .pipe(prettier({
      // config file can be found at _frontend/.prettierrc.js
    }))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('stylesFormat', stylesFormatTask);
module.exports = stylesFormatTask;
