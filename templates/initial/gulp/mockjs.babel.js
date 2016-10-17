import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

//mockjs server
//https://www.npmjs.com/package/gulp-supervisor
gulp.task('mockjs', () => {
  $.supervisor('mockjs-data/index.js');
});