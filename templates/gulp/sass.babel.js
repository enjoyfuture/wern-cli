import gulp from 'gulp';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';

const browsers = ['Chrome >= 35', 'Firefox >= 38', 'Edge >= 12',
  'Explorer >= 8', 'Android >= 4.3', 'iOS >=8', 'Safari >= 8'];

//检测样式加前缀
gulp.task('css-pre', () => {
  const info = autoprefixer({
    browsers
  }).info();

  console.log(chalk.magenta(info));
});
