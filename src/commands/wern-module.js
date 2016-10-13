import commander from 'commander';
import chalk from 'chalk';
import actions from '../generate/actions'
import helpers from '../util/ejsHelpers';

commander
  .description('Generate components, routes, redux, models using mern generator')
  .arguments('<generator> [args]')
  .parse(process.argv);


const args = commander.args;

const actionsInst = actions.create();
//设置模板根目录
actionsInst.setContext('module');

actionsInst.copyTpl('module.ejs', 'ee', {

});