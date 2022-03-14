import { IRepo } from '../@types';
import utils from '../utils';

describe('utils', () => {
  let username: string;
  let repos: IRepo[];
  let githubURL: string;

  beforeEach(async () => {
    username = 'axios';
    repos = await utils.getRepos(username);
    githubURL = utils.githubURL(username);
  });

  it('should return a valid github url', () => {
    expect(githubURL).toBe('https://api.github.com/users/axios/repos');
  });

  it('should return a list of repos', async () => {
    expect(repos).toBeDefined();
    expect(repos[0].name).toBe('axios');
  });

  it('should get repos', async () => {
    expect(repos).toBeDefined();
  });

  it('should clone repo', async () => {
    const repo = repos[0];
    const exec = await utils.cloneRepo(repo);
    expect(exec).toBeDefined();
  });
});
