export const transformUrl = (url) => {
  // Replace the protocol with an empty string
  const protocolRemoved = url.replace(/^https?:\/\//, '');

  // Replace all symbols except letters and numbers with hyphens
  const transformedUrl = protocolRemoved.replace(/[^a-zA-Z0-9]/g, '-');

  return transformedUrl;
};

export const getHtmlPath = (path, name) => `${path}/${name}.html`;

export const getFilesPath = (path, name) => `${path}/${name}_files`;

export const removeExtension = (filename) => filename.replace(/\.[^.]+$/, '');
