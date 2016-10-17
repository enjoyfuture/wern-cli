import commander from 'commander';
import chalk from 'chalk';
import actions from '../generate/actions'
import helpers from '../util/ejsHelpers';

commander
  .description('Generate components, routes, redux, models using mern generator')
  .arguments('<generator> [args]')
  .parse(process.argv);

console.log(chalk.yellow('-------------'));

const args = commander.args;

//TODO 这里需要判断是否传入参数，待写,
const moduleName = args[0];
const actionsInst = actions.create();
//设置模板根目录
actionsInst.setContext('module');

const modulePath = ['client', 'modules', moduleName];

// Module Page
let fileName = [...modulePath, `${helpers.capitalize(moduleName)}Page.js`];
actionsInst.copyTpl('module.ejs', fileName, {
  name: moduleName,
  helpers
});

// Component
fileName = [...modulePath, 'components', `${helpers.capitalize(moduleName)}.js`];
actionsInst.copyTpl('module-component.ejs', fileName, {
  name: moduleName,
  helpers
});

//Constant
fileName = [...modulePath, 'constant.js'];
actionsInst.copyTpl('module-constant.ejs', fileName, {});

//Action
fileName = [...modulePath, 'action.js'];
actionsInst.copyTpl('module-actions.ejs', fileName, {});

//Reducer
fileName = [...modulePath, 'reducer.js'];
actionsInst.copyTpl('module-reducer.ejs', fileName, {
  name: moduleName,
});

//scss
fileName = [...modulePath, 'index.scss'];
actionsInst.copyTpl('module-scss.ejs', fileName, {
  name: moduleName,
  helpers
});

console.log(chalk.yellow(`Create module [${moduleName}] success`));

console.log(chalk.yellow('-------------'));