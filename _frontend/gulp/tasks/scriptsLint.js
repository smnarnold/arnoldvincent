const gulp         = require('gulp');
const eslint       = require('gulp-eslint');
const gulpif       = require('gulp-if');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');

let paths = {
  src: path.join(global.paths.assets.src, 'js/**/*.js'),
  dest: path.join(global.paths.assets.src, 'js'),
};

let scriptsLintTask = function (mode = 'build') {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(paths.src)
    .on('error', handleErrors)
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      configFile: './.eslintrc.js',
      fix: mode === 'build',
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(gulpif(mode === 'build', eslint.failAfterError()))
    .pipe(gulpif(mode === 'build', gulp.dest(paths.dest)));
};

gulp.task('scriptsLint', () => scriptsLintTask('build'));
gulp.task('scriptsLintWatch', () => scriptsLintTask('watch'));
module.exports = scriptsLintTask;
