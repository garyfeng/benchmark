import React from 'react';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import { Heading, Paragraph, ThemeProvider, Tag, Global, Icon } from '@coreym/benchmark';
import docsTheme from './theme';
import Layout from './components/Layout';
import LiveCodeBlock from './components/LiveCodeBlock';
import ColorSwatch from './components/ColorSwatch';

const components = {
  h1: props => <Heading level={1} {...props} />,
  h2: props => <Heading level={2} {...props} />,
  h3: props => <Heading level={3} {...props} />,
  h4: props => <Heading level={4} {...props} />,
  h5: props => <Heading level={5} {...props} />,
  p: Paragraph,
  pre: props => <div {...props} />,
  code: LiveCodeBlock,
  Tag,
  ColorSwatch,
  Icon
};

export default function Root(props) {
  return (
    <div>
      <Helmet defaultTitle="Benchmark Design System">
        <html lang="en" />
      </Helmet>
      <MDXProvider components={components}>
        <Global>
          <ThemeProvider theme={docsTheme}>
            <Layout frontmatter={props.pageContext.frontmatter}>
              {props.children}
            </Layout>
          </ThemeProvider>
        </Global>
      </MDXProvider>
    </div>
  );
}
