import loadImages from './loadImages.js';
import axios from 'axios';
import fsp from 'fs/promises';
import path from 'path';

const loadpage = (url, saveDir = process.cwd()) => fetchPage(url)
  .then((htmlData) => {
    // const imagesPath = getFilesPath(path, transformedUrl);

    const transformedUrl = transformUrl(url);
    console.log(transformedUrl)

    const htmlPath = `${path.join(saveDir, transformedUrl)}.html`;
    const imagesPath = `${path.join(saveDir, transformedUrl)}_files`;
    console.log(htmlPath)
    console.log(imagesPath)
    //saveTo(htmlPath, htmlData).then(console.log(htmlPath)).catch(console.log);

    // loadImages(data, url, imagesDir).catch(console.log);
  })
  .catch(console.log);

const fetchPage = (url) => axios.get(url)
  .then((res) => res.data)
  .catch((err) => {
    throw err;
  });

// Replace the protocol with an empty string
// Replace all symbols except letters and numbers with hyphens
// Add .html extension
const transformUrl = (url) => {
  const protocolRemoved = url.replace(/^https?:\/\//, '');
  const transformedUrl = protocolRemoved.replace(/[^a-zA-Z0-9]/g, '-');
  return transformedUrl;
};

const saveTo = (path, data) => fsp.writeFile(path, data)
  .catch((err) => {
    throw err;
  });

export default loadpage;
