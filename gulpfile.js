var gulp = require('gulp');
var del = require('del');

// Require all tasks in gulp/tasks, including subfolders
require('require-dir')('./gulp/tasks', {recurse: true});

gulp.task('default', function () {
    // default task
    console.log('see README')
});

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src`
    del(['build']);
    del(['dist']);
});
