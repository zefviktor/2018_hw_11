

const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const clean       = require('gulp-clean');
const deploy      = require('gulp-gh-pages');

gulp.task('deploy', function () {
    return gulp.src("./build/**/*")
        .pipe(deploy());
});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});


gulp.task('css', function () {
    return gulp.src('assets/css/reset/*.css')
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src('assets/js/**/*.js')
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('assets/img/**/*')
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('fonts', function () {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("html", function () {
    return gulp.src("assets/**/*.html")
        .pipe(gulp.dest("build"))
        .pipe(browserSync.reload({stream: true}))
});




gulp.task('watch', gulp.series('sass', 'html', 'img', 'css','js', 'fonts',  (done) => {
    browserSync.init({
        server: "./build",
        notify: false,
        ui: {
            port: 3000
        }
        // tunnel: true
    });
    gulp.watch('assets/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('assets/**/*.html', gulp.parallel('html'));
    gulp.watch('assets/img/**/*', gulp.parallel('img'));
    gulp.watch('assets/css/**/*', gulp.parallel('css'));
    gulp.watch('assets/js/**/*.js', gulp.parallel('js'));
    gulp.watch('assets/fonts/**/*', gulp.parallel('fonts'));
}));