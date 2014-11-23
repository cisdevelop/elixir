var gulp = require('gulp');
var _ = require('underscore');
var config = require('laravel-elixir').config;
var inSequence = require('run-sequence');

var srcPaths;
var tasksToRun;

gulp.task('watch', function() {
    srcPaths = config.watchers.default;
    tasksToRun = _.intersection(config.tasks, _.keys(srcPaths));

    inSequence.apply(this, tasksToRun.concat('publish', 'watch-assets'));
});

gulp.task('watch-assets', function() {
    for (task in srcPaths) {
        gulp.watch(srcPaths[task], [task]);
    }
});