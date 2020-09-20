import {readFile} from 'fs';
import {promisify} from 'util';

const readFilePromise = promisify(readFile);
const readMockdata =  async (path:string) => {
  try {
    return await readFilePromise(path,'utf8');
    
  } catch (error) {
    throw new Error(error.message);
  }
}
export default readMockdata; 