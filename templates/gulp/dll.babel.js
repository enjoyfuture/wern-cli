import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import config from '../webpack.config.dll.babel';

const $ = gulpLoadPlugins();

// webpack 插件 DllPlugin
gulp.task('dll', () => {
  const compiler = webpack(config);
  // run webpack
  compiler.run((err, stats) => {
    if (err) {
      throw new $.util.PluginError('webpack:dll', err);
    }
    $.util.log('[webpack:dll]', stats.toString({
      colors: true
    }));
  });
});