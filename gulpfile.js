/* File: gulpfile.js */

// grab our packages
var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    eslint      = require('gulp-eslint'),
    concat      = require('gulp-concat'),
    cachebust   = require('gulp-cache-bust'),
    shortid     = require('shortid');

gulp.task('lint-js', function () {
    return gulp.src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build-css', function() {
    return gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/'));
});

gulp.task('build-js', function() {
    return gulp.src('src/*.js')
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
        .pipe(gulp.dest('build'));
});

gulp.task('build-html', function() {
    gulp.src('src/index.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('build', ['build-css', 'lint-js', 'build-js', 'build-html'], function() {
    gulp
});

gulp.task('minify', function() {});

gulp.task('watch', function() {
    gulp.watch('src/*.js',   ['lint-js', 'build-js']);
    gulp.watch('src/*.scss', ['build-css']);
    gulp.watch('src/*.html', ['build-html']);
});

gulp.task('publish', ['build', 'minify'], function() {
    gulp.src('./*')
        .pipe(git.add())
        .pipe(git.commit('pub.: ' + shortid()))
        .pipe(git.push('origin', 'master'), function (err) {
            if (err) throw err;
        });
});
