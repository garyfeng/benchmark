import React from 'react';
import { Link } from 'gatsby';
import Nav from '../Nav';
import { Tag, Heading } from '../../../index.js';
import SourceIcon from '../SourceIcon';
import css from './Layout.module.css';

function Layout({ frontmatter, children }) {
  return (
    <div className={css.layout}>
      <div className={css.sidebar}>
        <header role="banner">
          <Link to="/" className={css.title}>
            Benchmark Design System
          </Link>
        </header>
        <Nav />
      </div>
      <main className={css.main}>
        <div className={css.content}>
          <div className={css.heading}>
            <Heading level={1}>{frontmatter.title}</Heading>
            <Tag variant="warning">{frontmatter.status}</Tag>
            <div className={css.codeLink}>
              {frontmatter.source !== undefined && (
                <SourceIcon url={frontmatter.source} />
              )}
            </div>
          </div>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
