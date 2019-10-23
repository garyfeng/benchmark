const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = {
  components: './src/index.js',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Benchmark Playroom',
  frameComponent: './src/components/private/FrameComponent.js',
  widths: [1600],
  port: 5001,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
              options: {
                insertAt: 'top'
              }
            },
            {
              loader: 'css-loader',
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
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
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
  })
};
