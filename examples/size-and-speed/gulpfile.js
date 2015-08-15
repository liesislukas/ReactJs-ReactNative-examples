var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    minifyify = require('minifyify'),
    watchify = require('watchify');

gulp.task('browserify', function () {
    var bundler = browserify({
        entries: ['./app/index.js'], // only entry file required.
        transform: [reactify], // JSX to JS
        debug: true // sourcemapping
    });

    bundler.plugin('minifyify', {map: 'map.json', output: './public/js/map.json'})

    var watcher = watchify(bundler);
    return watcher
        .on('update', function () {
            var updateStart = Date.now();
            watcher.bundle()
                .pipe(source('index.js'))
                .pipe(gulp.dest('./public/js/'));
            console.log('Updated in ', (Date.now() - updateStart) + 'ms');
        })
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('css', function () {
    gulp.watch('styles/**/*.css', function () {
        return gulp.src('styles/**/*.css')
            .pipe(concat('main.css'))
            .pipe(gulp.dest('public/css/'));
    });
});


gulp.task('default', ['browserify', 'css']);