const getImgs = (html) => {
  const reqexp = /<img([\w\W]+?)>/g;
  const imgs = html.match(reqexp);
  return imgs;
};

export default getImgs;
