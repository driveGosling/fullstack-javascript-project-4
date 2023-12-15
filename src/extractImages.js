import cheerio from "cheerio";

const extractImages = (html) => {
  const $ = cheerio.load(html);
  const imageUrls = [];

  $('img').each((index, element) => {
    const imageUrl = $(element).attr('src');
    if (imageUrl) {
      imageUrls.push(imageUrl);
    }
  });

  return imageUrls;
};

export default extractImages;
