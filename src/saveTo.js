import fs from 'fs';
const fsp = fs.promises;

const saveTo = (path, data) => {
  return fsp.writeFile(path, data);
};

export default saveTo;