const gulp = require('gulp')

const sass = require('gulp-sass')(require('sass'))
const minifyCss = require('gulp-minify-css')
const postcss = require('gulp-postcss')

gulp.task('sass', async () => {
  return gulp.src('ui/css/**/*.scss')
    .pipe(sass())
    .pipe(postcss())
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'))
})