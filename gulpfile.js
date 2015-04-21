var gulp = require('gulp');
var connect = require('gulp-connect')

// 定义 webserver 任务
gulp.task('webserver', function() {
    connect.server({
      livereload: true
    });
});

// 定义默认任务
gulp.task('default', ['webserver']);