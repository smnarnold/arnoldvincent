const gulp          = require('gulp');
const gulpif        = require('gulp-if');
const gulpStylelint = require('gulp-stylelint');
const path          = require('path');

let paths = {
  src: path.join(global.paths.assets.src, 'scss/!(vendors)/**/*.scss'),
  dest: path.join(global.paths.assets.src, 'scss'),
};

let stylesLintTask = function (mode = 'build') {
  return gulp.src(paths.src)
    .pipe(gulpStylelint({
      configFile: './.stylelintrc.js',
      failAfterError: mode === 'build',
      fix: mode === 'build',
      reporters: [
        {formatter: 'string', console: true},
      ]
    }))
    .pipe(gulpif(mode === 'build', gulp.dest(paths.dest)));
};

gulp.task('stylesLint', () => stylesLintTask('build'));
gulp.task('stylesLintWatch', () => stylesLintTask('watch'));
module.exports = stylesLintTask;
