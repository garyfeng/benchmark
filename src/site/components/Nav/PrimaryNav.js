import React from 'react';
import PrimaryNavItem from './NavItem.js';
import PrimarySubNavItem from './SubNavItem.js';
import css from './Nav.module.css';

function PrimaryNav({ data = [], toggleStatus }) {
  return (
    <nav className={css.nav}>
      <ul className={css.main}>
        <PrimaryNavItem
          href="/overview"
          label="Overview"
          subNavItem={
            <ul className={css.secondary}>
              <PrimarySubNavItem
                title="Principals"
                url="/overview/principals"
              />
              <PrimarySubNavItem
                title="Getting Started"
                url="/overview/getting-started"
              />
              <PrimarySubNavItem
                title="Deisgn Tokens"
                url="/overview/design-tokens"
              />
              <PrimarySubNavItem title="Support" url="/overview/support" />
              <PrimarySubNavItem
                title="Contribute"
                url="/overview/contribute"
              />
              <PrimarySubNavItem url="/overview/downloads" title="Downloads" />
              <PrimarySubNavItem
                title="Version History"
                url="/overview/version-history"
              />
            </ul>
          }
        />
        <PrimaryNavItem
          href="/guidelines"
          label="Guidelines"
          toggleStatus={toggleStatus}
          subNavItem={
            <ul className={css.secondary}>
              {data
                .filter(page => page.node.frontmatter.group === 'Guidelines')
                .map(({ node: post }) => {
                  return (
                    <PrimarySubNavItem
                      key={post.id}
                      title={post.frontmatter.title}
                      url={post.frontmatter.path}
                    />
                  );
                })}
            </ul>
          }
        />
        <PrimaryNavItem
          href="/patterns"
          label="Patterns"
          toggleStatus={toggleStatus}
          subNavItem={
            <ul className={css.secondary}>
              {data
                .filter(page => page.node.frontmatter.group === 'Patterns')
                .map(({ node: post }) => {
                  return (
                    <PrimarySubNavItem
                      key={post.id}
                      title={post.frontmatter.title}
                      url={post.frontmatter.path}
                    />
                  );
                })}
            </ul>
          }
        />
        <PrimaryNavItem
          href="/styles"
          label="Styles"
          toggleStatus={toggleStatus}
          subNavItem={
            <ul className={css.secondary}>
              {data
                .filter(page => page.node.frontmatter.group === 'Styles')
                .map(({ node: post }) => {
                  return (
                    <PrimarySubNavItem
                      key={post.id}
                      title={post.frontmatter.title}
                      url={post.frontmatter.path}
                    />
                  );
                })}
            </ul>
          }
        />
        <PrimaryNavItem
          href="/components"
          label="Components"
          subNavItem={
            <ul className={css.secondary}>
              {data
                .filter(page => page.node.frontmatter.group === 'Components')
                .map(({ node: post }) => {
                  return (
                    <PrimarySubNavItem
                      key={post.id}
                      title={post.frontmatter.title}
                      url={post.frontmatter.path}
                    />
                  );
                })}
            </ul>
          }
        />
      </ul>
    </nav>
  );
}

export default PrimaryNav;
