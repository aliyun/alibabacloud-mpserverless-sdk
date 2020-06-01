const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');
const pkgVersion = `'${pkg.version}'`;
const pkgUA = `'pkg_name:${pkg.name};ver:${pkg.version};'`;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'none',

  entry: {
    // index: path.resolve(__dirname, 'dist/esm/index.js'),
    index: './dist/esm/index.js',
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MPServerless',
    libraryExport: 'MPServerless',
    libraryTarget: 'umd',
    globalObject: 'this',
  },

  resolve: {
    extensions: [ '.js' ],
    symlinks: false,
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      VERSION: pkgVersion,
      PKGUA: pkgUA,
    }),
    new CopyPlugin([
      {
        from: 'dist/umd/mpserverless.js',
        to: 'umd/mpserverless.js',
        transform(content) {
          return replaceVariable(content);
        },
      },
      {
        from: 'dist/esm/mpserverless.js',
        to: 'esm/mpserverless.js',
        transform(content) {
          return replaceVariable(content);
        },
      },
    ]),
  ],
};

function replaceVariable(content) {
  return content.toString()
    .replace('VERSION', pkgVersion)
    .replace('PKGUA', pkgUA);
}
