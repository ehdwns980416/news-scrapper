const nodeExternals = require('webpack-node-externals');

exports.webpack = config => Object.assign(config, {
  target: 'electron-renderer',
  externals: [nodeExternals()],
});

exports.exportPathMap = () => ({
  '/': { page: '/' },
});
