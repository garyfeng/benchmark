const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/components'),
    libraryTarget: 'commonjs2'
  },
  externals: {
    // don't inlucde react in bundle
    react: 'react'
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
            limit: 50000
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
