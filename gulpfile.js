/* File: gulpfile.js */

// grab our packages
var gulp        = require('gulp'),
    gutil       = require('gulp-util')
    git         = require('gulp-git'),
    sass        = require('gulp-sass'),
    clean       = require('gulp-clean'),
    rename      = require('gulp-rename'),
    eslint      = require('gulp-eslint'),
    concat      = require('gulp-concat'),
    replace     = require('gulp-replace'),
    markdown    = require('gulp-markdown'),
    cachebust   = require('gulp-cache-bust'),
    markdownpdf = require('gulp-markdown-pdf'),
    shortid     = require('shortid'),
    marked      = require('marked'),
    fs          = require('fs');

gulp.task('lint-js', function () {
    return gulp.src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build-css', function() {
    return gulp.src('src/styles/index.scss')
        .pipe(sass({ outputStyle: gutil.env.type === 'production' ? 'compressed' : 'default' }))
        .pipe(gulp.dest('build/'));
});

gulp.task('build-js', function() {
    return gulp.src('src/scripts/*.js')
        .pipe(concat('index.min.js'))
        //only uglify if gulp is ran with '--type production'
        // .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
        .pipe(gulp.dest('build'));
});

gulp.task('build-html', function() {
    var projectsmd = marked( 
        fs.readFileSync('data/projects.md').toString('utf8') 
    );

    gulp.src('src/html/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(replace(/\#projects\.md/mig, projectsmd))
        .pipe(gulp.dest('.'));
});

gulp.task('build-cv-pdf', function() {
    return gulp.src('data/resume.md')
        .pipe(markdownpdf())
        .pipe(rename('Vladislav_Gritsenko.pdf'))
        .pipe(gulp.dest('data'));
});

gulp.task('build', ['build-css', 'lint-js', 'build-js', 'build-html']);

// gulp.task('minify', function() {});
// gulp.task('build-markdown', function() {});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/scripts/*.js',   ['lint-js', 'build-js']);
    gulp.watch('src/styles/*.scss', ['build-css']);
    gulp.watch('src/html/*.html', ['build-html']);
});

// gulp.task('publish', ['build'], function() {
//     gulp.src('./*')
//         .pipe(git.add())
//         .pipe(git.commit('pub.: ' + shortid()))
//         .pipe(git.push('origin', 'master'), function (err) {
//             if (err) throw err;
//         });
// });
