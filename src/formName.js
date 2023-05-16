const formName = (urlStr, path) => {
  const url = new URL(urlStr);
  const regexp = /[\W]/g;

  const name = `${url.host}${url.pathname}`.replace(regexp, '-').concat('.html');
  return `${path}/${name}`;
};

export default formName;
