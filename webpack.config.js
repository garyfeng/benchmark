const path = require('path');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  plugins: [new PeerDepsExternalsPlugin()],
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/components'),
    library: 'benchmark',
    libraryTarget: 'umd'
  },
  optimization: {
    concatenateModules: false,
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          },
          require.resolve('sass-loader')
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              localsConvention: 'camelCaseOnly',
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.woff$/,
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
