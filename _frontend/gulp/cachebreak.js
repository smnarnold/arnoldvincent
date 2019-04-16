const debug = require('gulp-debug');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const replace = require('gulp-replace');

const paths = {
  src: [
    `${global.paths.templates}/**/*.{hbs,html,twig}`,
    `!${global.paths.templates}/**/node_modules/**`,
    `!${global.paths.templates}/**/styleguide/**`,
  ],
  dest: global.paths.templates,
};

function cachebreakTask() {
  const date = new Date()
    .toISOString()
    .replace(/\.[0-9]+Z$/, 'Z')
    .replace(/[^0-9TZ]/g, '');

  return gulp
    .src(paths.src, { base: paths.dest })
    .pipe(gulpif(global.debug, debug({ title: 'Cachebreaking' })))
    .pipe(replace(/((?:href=|src=|url\()['|"][^\s>"']+?\?v=)[^\s>"']+?(['|"])/gi, `$1${date}$2`))
    .pipe(gulp.dest(paths.dest));
}

gulp.task('cachebreak', cachebreakTask);
