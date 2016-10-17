import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp');

//开发环境，启动服务
gulp.task('server', ['copy:dev'], () => {
  gulp.start(['webpack:server']);
  //开启 mockjs 服务
  gulp.start(['mockjs']);
});

//编译
gulp.task('build', ['prebuild'], () => {
  gulp.start('webpack:build');
});


//默认任务
gulp.task('default', () => {
  gulp.start('build');
});
