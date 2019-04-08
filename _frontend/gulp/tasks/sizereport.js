const gulp       = require('gulp');
const path       = require('path');
const sizereport = require('gulp-sizereport');

let paths = {
  src: path.join(global.paths.assets.dest, '**/*'),
};

let sizereportTask = function () {
  return gulp.src(paths.src)
    .pipe(sizereport({
      gzip: true
    }));
};

gulp.task('sizereport', sizereportTask);
module.exports = sizereportTask;
