import fsp from 'fs/promises';

const saveTo = (path, data) => fsp.writeFile(path, data)
  .catch((err) => {
    throw new Error(err);
  });

export default saveTo;
