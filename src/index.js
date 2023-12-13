import getData from './getData.js';
import transformUrl from './transformUrl.js';
import saveTo from './saveTo.js';

const loadpage = (url, path = process.cwd()) => getData(url)
  .then((data) => {
    const name = transformUrl(url, path);
    saveTo(name, data).then(console.log(name)).catch(console.log);
  })
  .catch(console.log);

export default loadpage;
