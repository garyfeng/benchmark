module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.story\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
      },
      {
        test: /\.scss$/,
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
          },
          require.resolve('sass-loader')
        ]
      },
      {
        test: /\.css$/,
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
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000
          }
        }
      }
    ]
  }
};
