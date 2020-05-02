module.exports = {
  stories: ['@coreym/benchmark/src/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/, /\.cache/],
      use: {
        loader: 'babel-loader',
      },
    });

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
        }
      ]
    });

    return config;
  },
};
