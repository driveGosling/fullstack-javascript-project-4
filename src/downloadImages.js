import cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { transformUrl, removeExtension } from './transformUrl.js';

const extractImages = (html, pageUrl) => {
  const $ = cheerio.load(html);
  const imageUrls = [];

  $('img').each((index, element) => {
    const imageUrl = pageUrl + $(element).attr('src');
    if (imageUrl) {
      imageUrls.push(imageUrl);
    }
  });

  return imageUrls;
};

async function downloadImages(html, pageUrl, folderPath) {
  const imageUrls = extractImages(html, pageUrl);
  // Create the folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Download each image and save it to the folder
  const downloadPromises = imageUrls.map(async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

      const imageExt = path.extname(imageUrl);
      const imageName = transformUrl(removeExtension(imageUrl));

      const imageFileName = `${imageName}${imageExt}`;
      const imagePath = path.join(folderPath, imageFileName);

      fs.writeFileSync(imagePath, response.data);
    } catch (error) {
      console.error(`Failed to download ${imageUrl}: ${error.message}`);
    }
  });

  await Promise.all(downloadPromises);
}

export default downloadImages;
