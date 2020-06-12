module.exports = {
  components: '@coreym/benchmark',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Benchmark Playroom',
  frameComponent: './Frame.js',
  widths: [1200],
  port: 5003,
  openBrowser: true,
  snippets: './snippets.js',
  themes: './themes.js',
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
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { modules: false }],
                  '@babel/preset-react'
                ]
              }
            }
          ]
        }
      ]
    }
  })
};
