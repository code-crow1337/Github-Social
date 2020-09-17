import {readFile} from 'fs';
import {promisify} from 'util';

const readFilePromise = promisify(readFile);
const readMockdata =  async (path:string) => {
  console.log(path);
  try {
    return await readFilePromise(path,'utf8');
    
  } catch (error) {
    throw new Error(error.message);
  }
}
export default readMockdata; 