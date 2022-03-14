import { program } from 'commander';
import utils from './utils';

const { cloneRepo, getRepos } = utils;

(async () => {
  program.version('0.0.1').option('-u, --username [username]', 'Github username');
  program.parse();
  const options = program.opts();
  const username = options.username;
  if (!username) {
    console.error('Please provide a username');
    process.exit(1);
  }
  const repos = await getRepos(username);
  for (const repo of repos) {
    await cloneRepo(repo);
  }
})();

export { utils };
