const debug = require('gulp-debug');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');

const isDev = process.env.NODE_ENV === 'development';

const paths = {
  src: ['src/**/*.{js}', '!src/**/vendors/**/*'],
  dest: 'src',
};

function lintScriptsTask(mode = 'build') {
  return gulp
    .src(paths.src, { base: paths.dest })
    .pipe(gulpif(global.debug, debug({ title: 'Linting' })))
    .pipe(gulpif(isDev && mode === 'watch', plumber()))
    .pipe(
      eslint({
        configFile: './.eslintrc.js',
        fix: mode === 'build',
      }),
    )
    .pipe(eslint.format())
    .pipe(gulpif(mode === 'build', eslint.failAfterError()))
    .pipe(gulpif(mode === 'build', gulp.dest(paths.dest)));
}

gulp.task('lint:build:scripts', () => lintScriptsTask('build'));
gulp.task('lint:watch:scripts', () => lintScriptsTask('watch'));
