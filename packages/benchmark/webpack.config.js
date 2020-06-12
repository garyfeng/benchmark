const path = require('path');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './index.js'
  },
  plugins: [
    // Don't include peer dependencies (such as React) with
    // the bundle as the app(s) that uses this library will
    // already have it loaded.
    new PeerDepsExternalsPlugin(),

    // style-loader does not work when doing SSR so we
    // extract the css into a seperate file. This also helps
    // prevent Flash of Unstyled Content (FOUC).  This only
    // applies to components that import css files. It does
    // not apply to components that use emotion for styling
    // as they are generated at runtime.
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/'),
    library: 'benchmark',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  optimization: {
    concatenateModules: false,
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            // todo: to be reinstated later
            // disabled temporality for convenience
            // limit: 10000
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /\.cache/],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
