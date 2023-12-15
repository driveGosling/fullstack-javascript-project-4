const transformUrl = (url, path) => {
  // Replace the protocol with an empty string
  const protocolRemoved = url.replace(/^https?:\/\//, '');

  // Replace all symbols except letters and numbers with hyphens
  const symbolsReplaced = protocolRemoved.replace(/[^a-zA-Z0-9]/g, '-');

  // Combine the path, transformed URL, and the .html extension
  const transformedUrl = `${path}/${symbolsReplaced}.html`;

  return transformedUrl;
}

export default transformUrl;
