import getData from './getData.js';
import formName from './formName.js';
import fs from 'fs';

const fsp = fs.promises;

const loadpage = (url, path = process.cwd()) => {
  return getData(url)
    .then((data) => {
      const name = formName(url, path);
      fsp.writeFile(name, data).then(console.log(name)).catch(console.log);
    })
    .catch(console.log);
};

export default loadpage;