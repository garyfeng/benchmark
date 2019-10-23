const path = require('path');

module.exports = {
  title: 'Benchmark Style Guide',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  exampleMode: 'expand',
  components: 'src/components/**/[A-Z]*.js',
  styleguideDir: './dist/styleguide',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/private/styleguide/Wrapper')
  },
  webpackConfig: require('./webpack.config.js'),
  sections: [
    {
      name: 'Elements',
      components: [
        './src/components/Icon/Icon.js',
        './src/components/Button/Button.js',
        './src/components/RadioButton/RadioButton.js'
      ]
    }
  ]
};
