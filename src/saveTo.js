import fsp from 'fs/promises';

const saveTo = (path, data) => fsp.writeFile(path, data)
  .catch((err) => {
    throw err;
  });

export default saveTo;
