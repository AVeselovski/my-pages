module.exports = function(str, alt) {
  if (str) {
    let path = str.toLowerCase().replace(/\s/g, '');
    path = path.charAt(0) === '/' ? path : '/' + path;

    return path;
  } else {
    let path = alt.toLowerCase().replace(/\s/g, '');
    path = path.charAt(0) === '/' ? path : '/' + path;

    return path;
  }
};
