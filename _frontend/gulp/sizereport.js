const gulp = require('gulp');
const sizereport = require('gulp-sizereport');

const paths = {
  src: `${global.paths.dist}/**/*`,
};

function sizereportTask() {
  return gulp.src(paths.src).pipe(sizereport({ gzip: true }));
}

gulp.task('sizereport', sizereportTask);
