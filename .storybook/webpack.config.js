const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: [
    // style-loader does not work when doing SSR so we
    // extract the css into a seperate file. This also helps
    // prevent Flash of Unstyled Content (FOUC).  This only
    // applies to components that import css files. It does
    // not apply to components that use emotion for styling
    // as they are generated at runtime.
    new MiniCssExtractPlugin()
  ],
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
        test: /\.css$/,
        loaders: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode
            }
          },
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
        test: /\.(woff|woff2)$/,
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
