'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var babelify = require('babelify');
var browserSync = require('browser-sync').create();

// add custom browserify options here
var customOpts = {
    entries: ['apps/example_md/index.jsx'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('example_md', ['serve_example_md'], bundle);

gulp.task('html', function () {
    gulp.src(['apps/example_md/index.html'])
        //.pipe(plugins.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/example_md'));
});

gulp.task('css', function () {
    gulp.src(['apps/example_md/main.css'])
        //.pipe(plugins.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/example_md'));
});

b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal
b.transform(babelify.configure({presets: ['react', 'es2015']}));

function bundle() {
    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('build/example_md/'));
}

gulp.task("serve_example_md", ['html', 'css'], function () {
    browserSync.init({
        server: {
            baseDir: "./build/example_md"
        }
    });
});
