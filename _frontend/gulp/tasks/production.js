const gulp        = require('gulp');
const colors      = require('colors/safe');
const log         = require('fancy-log');
const runSequence = require('run-sequence');

let productionTask = function (cb) {
  global.production = true;
  log(`Building in '${colors.cyan(`production`)}' mode`);
  runSequence('stylesFormat', 'styles', 'scriptsFormat', 'scripts', 'cacheBreaker', cb);
};

gulp.task('production', productionTask);
module.exports = productionTask;
