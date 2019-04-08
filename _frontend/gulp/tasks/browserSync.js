const gulp        = require('gulp');
const browserSync = require('browser-sync');

let browserSyncTask = function () {
  browserSync.init({
    open: false,
    // proxy: 'dev.local',
    server: {
      baseDir: '../',
    },
  });
};

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
