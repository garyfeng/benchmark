import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PrimaryNav from './PrimaryNav.js';

export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          allMdx(sort: { order: ASC, fields: [frontmatter___title] }) {
            edges {
              node {
                id
                frontmatter {
                  group
                  title
                  path
                }
              }
            }
          }
        }
      `}
      render={data => <PrimaryNav data={data.allMdx.edges}></PrimaryNav>}
    />
  );
};
