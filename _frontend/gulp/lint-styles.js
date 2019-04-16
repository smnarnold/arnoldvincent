const debug = require('gulp-debug');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const gulpStylelint = require('gulp-stylelint');
const plumber = require('gulp-plumber');

const isDev = process.env.NODE_ENV === 'development';

const paths = {
  src: ['src/**/*.scss', '!src/**/abstracts/**/*', '!src/**/vendors/**/*'],
  dest: 'src/scss',
};

function lintStylesTask(mode = 'build') {
  return gulp
    .src(paths.src, { base: paths.dest })
    .pipe(gulpif(global.debug, debug({ title: 'Linting' })))
    .pipe(gulpif(isDev && mode === 'watch', plumber()))
    .pipe(
      gulpStylelint({
        configFile: './.stylelintrc.js',
        failAfterError: mode === 'build',
        fix: mode === 'build',
        reporters: [{ formatter: 'string', console: true }],
      }),
    )
    .pipe(gulpif(mode === 'build', gulp.dest(paths.dest)));
}

gulp.task('lint:build:styles', () => lintStylesTask('build'));
gulp.task('lint:watch:styles', () => lintStylesTask('watch'));
