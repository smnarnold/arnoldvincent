const browserSync = require('browser-sync');
const gulp = require('gulp');

function browserSyncTask(done) {
  browserSync.init({
    open: false,
    // proxy: 'dev.local',
    server: {
      baseDir: '../',
    },
  });

  done();
}

gulp.task('browsersync', browserSyncTask);
