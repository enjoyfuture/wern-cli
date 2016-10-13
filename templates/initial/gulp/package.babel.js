import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import moment from 'moment';
import md5File from 'md5-file';
import chalk from 'chalk';
import filePackage from 'file-package';

const $ = gulpLoadPlugins();

// 计算文件大小
gulp.task('size', () => {
  return gulp.src('dist/**/*').pipe($.size({title: '文件大小：', gzip: true}));
});

/**
 * 压缩
 * 文件名格式（根据需要自定义）： filename-YYYYMMDDTHHmm
 * 这里采用 file-package 来压缩打包
 */
const filePath = `filename-${moment().format('YYYYMMDDTHHmm')}`;
const fileName = `${filePath}.zip`;
gulp.task('zip', () => {
  filePackage('dist', `zip/${fileName}`, {
    packageRoot: filePath
  });
});

/**
 * 生成压缩后文件 md5
 */
gulp.task('md5', ['size', 'zip'], () => {
  md5File(`zip/${fileName}`, (error, md5) => {
    if (error) {
      return console.log(error);
    }
    console.log(chalk.green('生成的压缩文件为'));
    console.log(chalk.magenta(fileName));
    console.log(chalk.green('生成的 md5 为'));
    console.log(chalk.magenta(md5));
  })
});

// 打包
gulp.task('package', () => {
  gulp.start('md5');
});