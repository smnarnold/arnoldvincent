const gulp        = require('gulp');
const colors      = require('colors/safe');
const log         = require('fancy-log');
const runSequence = require('run-sequence');

let defaultTask = function (cb) {
  global.production = false;
  log(`Building in '${colors.cyan(`development`)}' mode`);
  runSequence.options.showErrorStackTrace = false;
  runSequence('stylesFormat', 'styles', 'scriptsFormat', 'scripts', 'browserSync', 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
