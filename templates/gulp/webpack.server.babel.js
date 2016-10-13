import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import opn from 'opn';
import chalk from 'chalk';
import config from '../webpack.config.dev.babel';

const $ = gulpLoadPlugins();

gulp.task('webpack:server', () => {
  const {webpackConfig, ip, port} = config;

  // Start a webpack-dev-server
  const compiler = webpack(webpackConfig);

  const server = new WebpackDevServer(compiler, webpackConfig.devServer);
  server.listen(port, ip, (err) => {
    if (err) {
      throw new $.util.PluginError('webpack-dev-server', err);
    }
    // Server listening
    console.log(chalk.magenta('[webpack-dev-server]', `http://${ip}:${port}/`));

    // Chrome is google chrome on OS X, google-chrome on Linux and chrome on Windows.
    // app 在 OS X 中是 google chrome, 在 Windows 为 chrome ,在 Linux 为 google-chrome
    opn(`http://${ip}:${port}/`, {app: 'google chrome'});
  });

});

