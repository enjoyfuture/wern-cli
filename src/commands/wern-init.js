import chalk from 'chalk';
import commander from 'commander';
import fullname from 'fullname';
import inquirer from 'inquirer';
import moment from 'moment';
import actions from '../generate/actions'
import helpers from '../util/ejsHelpers';

commander
  .description('Create a MERN app in current directory!')
  .option('-t, --target [name]', 'Initialize the project with a variant [mern-starter]', 'mern-starter')
  .parse(process.argv);

fullname().then((name) => {
  console.log(chalk.green(`Hello ${name}，你好！`));

  const pwd = process.env.pwd || process.env.Pwd || process.env.PWD;
  const currentDirName = pwd.substring(pwd.lastIndexOf('/') + 1, pwd.length);
  const questions = [
    {
      type: 'input',
      name: 'appName',
      message: `Please enter the name of app, the default is current directory name: [${currentDirName}]`
    },
    {
      type: 'input',
      name: 'version',
      message: 'Please enter the version of app, the default is: [0.1.0]'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Please enter the author of app, multiple authors by commas. You can enter directly.'
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'Please enter the keywords of app, multiple keywords by commas. You can enter directly.'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter the description of app.'
    }
  ];

  inquirer.prompt(questions).then((answers) => {
    let {appName, version} = answers;
    const {author, keywords, description} = answers;
    appName = appName || currentDirName;
    version = version || '0.1.0';

    const actionsInst = actions.create();
    //设置模板根目录
    actionsInst.setContext('initial');

    actionsInst.copyTpl('package', 'package.json', {
      appName,
      version,
      author,
      keywords,
      description,
      helpers
    });

    actionsInst.copyTpl('README.md', 'README.md', {
      appName,
      description
    });

    const date = moment().format('YYYY-MM-DD');
    actionsInst.copyTpl('CHANGELOG.md', 'CHANGELOG.md', {
      appName,
      version,
      date
    });

    actionsInst.copy('.babelrc', '.babelrc');
    actionsInst.copy('.eslintrc', '.eslintrc');
    actionsInst.copy('gitignore', '.gitignore');
    actionsInst.copy('gulpfile.babel.js', 'gulpfile.babel.js');
    actionsInst.copy('LICENSE', 'LICENSE');
    actionsInst.copy('webpack.config.dev.babel.js', 'webpack.config.dev.babel.js');
    actionsInst.copy('webpack.config.dll.babel.js', 'webpack.config.dll.babel.js');
    actionsInst.copy('webpack.config.prod.babel.js', 'webpack.config.prod.babel.js');

    actionsInst.directory('client', 'client');
    actionsInst.directory('gulp', 'gulp');
    actionsInst.directory('mockjs-data', 'mockjs-data');

    console.log(chalk.green(''));
    console.log(chalk.green('---------------------------------------------------'));

    console.log(chalk.green('You generate a app basing on wern-cli success.'));
    console.log(chalk.green('You can exec the command [npm install] to install the dependencies.'));
    console.log(chalk.green('You can exec the command [gulp server] to start the app server.'));
  });
});
