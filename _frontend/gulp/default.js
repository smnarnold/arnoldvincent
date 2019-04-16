const chalk = require('chalk');
const gulp = require('gulp');
const log = require('fancy-log');

const env = process.env.NODE_ENV || 'production';

let tasks = ['init', 'format', 'lint:build:styles', 'build:styles', 'build:scripts'];

if (env === 'development') {
  tasks = [...tasks, 'browsersync', 'watch'];
} else {
  tasks = [...tasks, 'cachebreak'];
}

function defaultTask(done) {
  log(`Building in '${chalk.cyan(env)}' mode`);
  return gulp.series(...tasks)(done);
}

gulp.task('default', defaultTask);
