import fetchPage from './fetchPage.js';
import { transformUrl, getHtmlPath, getFilesPath } from './transformUrl.js';
import saveTo from './saveTo.js';
import downloadImages from './downloadImages.js';

const loadpage = (url, path = process.cwd()) => fetchPage(url)
  .then((data) => {
    const transformedUrl = transformUrl(url);

    const htmlPath = getHtmlPath(path, transformedUrl);
    saveTo(htmlPath, data).then(console.log(htmlPath)).catch(console.log);
    downloadImages(data, url, getFilesPath(path, transformedUrl)).catch(console.log);
  })
  .catch(console.log);

export default loadpage;
