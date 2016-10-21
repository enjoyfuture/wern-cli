import gulp from 'gulp';
import childProcess from 'child_process';
import chalk from 'chalk';

//清理临时和打包目录
gulp.task('test', () => {
  const spawn = childProcess.spawn;
  const bundle = spawn('npm', ['run', 'test']);

  bundle.stdout.on('data', (data) => {
    let _data = data.toString();
    _data = _data.replace(/\n$/, '');
    if (_data) {
      console.log(chalk.magenta(_data));
    }
  });

  bundle.stderr.on('data', (data) => {
    console.log(chalk.red(data));
  });

});