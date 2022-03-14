import { IRepo } from '../@types';
import { execSync } from 'child_process';

export const cloneRepo = async (repo: IRepo) => {
  const repoURL = `git clone ${repo.clone_url}`;
  const exec = execSync(repoURL);
  console.log(`Cloning ${repo.name}`);
  if (exec instanceof Error) {
    console.error(exec);
    return exec;
  }
  console.log(`Cloned ${repo.name}`);
  return exec;
};
export default cloneRepo;
