var gulp = require('gulp');
var gls = require('gulp-live-server');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var babelify = require("babelify");

gulp.task('bundle-app', () => {
    var bundler = browserify({
        entries: ['app/client.jsx'],
        transform: [babelify], // JSX to JS
        debug: true, // sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // watchify
    });

    var watcher = watchify(bundler);
    return watcher
        .on('update', function () {
            var updateStart = Date.now();
            watcher.bundle()
                .on('error', console.error.bind(console))
                .pipe(source('client.js'))
                .pipe(gulp.dest('./tmp'));
            console.log('Updated in ', (Date.now() - updateStart) + 'ms');
        })
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('client.js'))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('live-server', () => {
    var server = gls('./app/serverBabel.js');
    server.start();

    //gulp.watch(['./tmp/**'], function (file) {
    //    server.notify.apply(server, [file]);
    //    server.start.bind(server); //RESTART SERVER
    //});

});

gulp.task('copy', () => {
     gulp.src(['app/*.css'])
     .pipe(gulp.dest('./tmp'));
});

gulp.task('default', ['bundle-app', 'live-server'], () => {
});

