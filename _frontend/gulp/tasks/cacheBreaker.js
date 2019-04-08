const gulp         = require('gulp');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');
const replace      = require('gulp-replace');

let paths = {
  src: [
    path.join(global.paths.views, '/**/*.html'),
    '!../_frontend/node_modules/**'
  ],
  dest: path.join(global.paths.views),
};

let cacheBreakerTask = function () {
  let date = (new Date()).toISOString().replace(/\.[0-9]+Z$/, 'Z').replace(/[^0-9TZ]/g, '');

  return gulp.src(paths.src, {base: paths.dest})
    .on('error', handleErrors)
    .pipe(replace(/((?:href=|src=|url\()['|"][^\s>"']+?\?v=)[^\s>"']+?(['|"])/gi, '$1' + date + '$2'))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('cacheBreaker', cacheBreakerTask);
module.exports = cacheBreakerTask;
