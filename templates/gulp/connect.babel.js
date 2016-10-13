import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

//打包后,启动服务
gulp.task('connect', () => {
  $.connect.server({
    host: 'localhost',
    root: 'dist',
    port: 9091,
    livereload: true
  });
});