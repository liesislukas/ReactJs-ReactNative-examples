var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),
    webserver = require('gulp-webserver');

gulp.task('browserify', function () {
    var bundler = browserify({
        entries: ['./app/main.js'], // only entry file required.
        transform: [reactify], // JSX to JS
        debug: true, // sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // watchify
    });

    var watcher = watchify(bundler);
    return watcher
        .on('update', function () {
            var updateStart = Date.now();
            watcher.bundle()
                .on('error', console.error.bind(console))
                .pipe(source('main.js'))
                .pipe(gulp.dest('./public/build/'));
            console.log('Updated in ', (Date.now() - updateStart) + 'ms');
        })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('css', function () {
    gulp.watch('styles/**/*.css', function () {
        return gulp.src('styles/**/*.css')
            .pipe(concat('main.css'))
            .pipe(gulp.dest('public/build/'));
    });
});

// webserver is buggy. used http-server
gulp.task('webserver', function () {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            directoryListing: {
                enable: true,
                path: 'build'
            },
            open: true
        }));
});

gulp.task('default', ['browserify', 'css']);
