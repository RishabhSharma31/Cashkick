// assetsTransformer.js
module.exports = {
  process(src, path) {
    return `module.exports = ${JSON.stringify(path)}`;
  },
};
