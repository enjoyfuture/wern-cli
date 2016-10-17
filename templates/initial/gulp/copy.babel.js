import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

//复制替换文件，分开发、正式环境和本地服务环境
//开发环境
gulp.task('copy:dev', () => {
  const paths = [
    {src: 'client/store/configureStore.dev.js', dest: 'client/store/index.js'},
    {src: 'client/containers/Root.dev.js', dest: 'client/containers/Root.js'},
  ];
  return $.copy2(paths);
});

//生产环境
gulp.task('copy:prod', () => {
  const paths = [
    {src: 'client/store/configureStore.prod.js', dest: 'client/store/index.js'},
    {src: 'client/containers/Root.prod.js', dest: 'client/containers/Root.js'},
    {src: 'client/favicon.ico', dest: 'dist/favicon.ico'},
  ];
  return $.copy2(paths);
});