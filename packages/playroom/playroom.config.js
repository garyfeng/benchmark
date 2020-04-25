module.exports = {
  components: '@coreym/benchmark',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Benchmark Playroom',
  frameComponent: './Frame.js',
  widths: [1600],
  port: 5003,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
};
