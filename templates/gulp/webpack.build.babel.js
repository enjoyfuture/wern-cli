import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import config from '../webpack.config.prod.babel';

const $ = gulpLoadPlugins();

// 编译打包
gulp.task('webpack:build', () => {
  const compiler = webpack(config);
  // run webpack
  compiler.run((err, stats) => {
    if (err) {
      throw new $.util.PluginError('webpack:build', err);
    }
    $.util.log('[webpack:build]', stats.toString({
      colors: true
    }));

    //编译完压缩，生成 md5 等
    gulp.start('package');
  });
});

gulp.task('prebuild', ['clean'], () => {
  gulp.start('copy:prod');
});

