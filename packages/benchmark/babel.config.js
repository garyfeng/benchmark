module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          // this is needed to for async tests in jest
          node: 'current'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
