import fsp from 'fs/promises';

const saveTo = (path, data) => fsp.writeFile(path, data);

export default saveTo;
