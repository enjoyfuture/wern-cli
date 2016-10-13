import commander from 'commander';
import pjson from '../../package.json';

commander
  .version(pjson.version)
  .description('Initialize a WERN powered project')
  .command('init [name]', 'Initialize a WERN project.')
  .command('list', 'List WERN variants')
  .command('search [term]', 'Search for WERN variant')
  .command('info [term]', 'View details of a WERN variant')
  .parse(process.argv);

if (!commander.args.length) {
  commander.help();
}
