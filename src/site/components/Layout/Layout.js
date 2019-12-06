import React from 'react';
import { Link } from 'gatsby';
import Nav from '../Nav';
import Tag from '../Tag';
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
            <h1>{frontmatter.title}</h1>
            <Tag type="warning">{frontmatter.status}</Tag>
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
