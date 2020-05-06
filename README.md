# Benchmark Design System

Design system prototype.

## Here be dragons

This is not production code. It's a playground for prototyping the technologies and architectural details for the Benchmark component library / design system.


## Developer Setup

### Prerequisites

- [NodeJS v12+](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/)

### Setup

```bash
# clone repo
$ git clone https://github.com/NAEPDEV/benchmark.git
$ cd benchmark

# install dependencies
$ yarn install

# Runs the "bootstrap" script defined in package.json.
# The script links together all the packages in the monorepo. 
# This allows the "docs" package to use a live reference to the 
# components from the main "benchmark" package.
$ yarn run bootstrap
```

### Docs & Storybook

Storybook is a workshop environment that is used to render the components in isolation. It is used to help develop and review the components from the main benchmark package.

```bash
# storybook
$ cd packages/storybook
$ yarn start

```

The docs package is a gatsby site which documents the design system. Throughout the documentation it renders live examples of the benchmark components. The pages in the site itself are built with the benchmark components with a documentation friendly theme applied.

```bash
# docs
$ cd packages/docs
$ yarn start
```

## License

MIT