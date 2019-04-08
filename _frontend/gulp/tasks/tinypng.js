const gulp    = require('gulp');
const path    = require('path');
const tinypng = require('gulp-tinypng-compress');

let paths = {
  src: path.join(global.paths.assets.src, 'img/**/*.{png,PNG,jpg,JPG,jpeg,JPEG}'),
  dest: path.join(global.paths.assets.dest, 'img'),
  sigFile: path.join(global.paths.assets.src, 'img/.tinypng-sigs'),
};

let tinypngTask = function () {
  return gulp.src(paths.src)
    .pipe(tinypng({
      force: false,
      ignore: false,
      key: 'YdAop9T7SOwoyGawdnmQU0YepgZAVMtH',
      log: true,
      parallel: true,
      parallelMax: 4,
      sameDest: false,
      sigFile: paths.sigFile,
      summarize: true,
    }))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('tinypng', tinypngTask);
module.exports = tinypngTask;
