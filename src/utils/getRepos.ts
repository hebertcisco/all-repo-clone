import axios from 'axios';
import githubURL from './githubURL';

export const getRepos = async (username: string) => {
  const response = await axios.get(githubURL(username));
  return response.data;
};
export default getRepos;
