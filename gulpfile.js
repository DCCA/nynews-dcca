const gulp = require('gulp'),
      terser = require('gulp-terser'),
      rename = require('gulp-rename'),
      browserSync = require('browser-sync').create(),
      eslint = require('gulp-eslint'),
      cssnano = require('gulp-cssnano'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp
        .src('./sass/*.scss')
        .pipe(sass())
        // Plugins
        .pipe(
            autoprefixer({
              browsers: ['last 2 versions']
            })
        )
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./build/css'))
})

gulp.task('scripts', function(){
  return gulp.src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())        
    .pipe(eslint.failAfterError())
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            cors: true
        },
    });
});

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', gulp.series('scripts' , 'reload'));
    gulp.watch('sass/*.scss', gulp.series('sass' , 'reload'));
    gulp.watch('./*.html', gulp.series('reload'));
    gulp.watch('style/*.css', gulp.series('reload'));
});

gulp.task('default', gulp.parallel('scripts', 'sass' ,'browser-sync', 'watch'));