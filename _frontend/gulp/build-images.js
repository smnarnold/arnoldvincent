const extReplace = require('gulp-ext-replace');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

const paths = {
  src: 'src/img/**/*.{gif,jpg,png,svg}',
  dest: `${global.paths.dist}/img`,
};

function imageminTask() {
  return gulp
    .src(paths.src)
    .pipe(
      imagemin(
        [
          // gif
          imagemin.gifsicle({ interlaced: true, optimizationLevel: 3 }), // lossless
          // jpg
          imagemin.jpegtran({ progressive: true }), // lossless
          imageminMozjpeg({ quality: 80 }), // lossy
          // png
          // imagemin.optipng({ optimizationLevel: 3 }), // lossless
          imageminPngquant({ quality: [0.95, 0.98], speed: 1 }), // lossy
          // svg
          imagemin.svgo({ plugins: [{ removeStyleElement: true, removeViewBox: false }] }), // lossy
        ],
        {
          verbose: true,
        },
      ),
    )
    .pipe(gulp.dest(paths.dest));
}

function exportWebpTask() {
  return gulp
    .src([paths.src, '!**/*.svg'])
    .pipe(
      imagemin(
        [
          // webp
          imageminWebp({ quality: 80 }), // lossy
        ],
        {
          verbose: true,
        },
      ),
    )
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest(paths.dest));
}

gulp.task('build:images', gulp.series(imageminTask, exportWebpTask));
