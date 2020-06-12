module.exports = {
  presets: ['@babel/preset-react'],

  plugins: [
    // This is needed for jest to be able to run the tests
    // in node.js. Node does not currently support es modules
    // (import/export) natively.
    '@babel/plugin-transform-modules-commonjs'
  ]
};
