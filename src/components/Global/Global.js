import React from 'react';
import { Global, css } from '@emotion/core';

export default () => {
  let global = css`
    html,
    body {
      height: 100%;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      line-height: 1.11;
    }
    /**
     * Form elements don't inherit font settings.
     * https://stackoverflow.com/questions/26140050/why-is-font-family-not-inherited-in-button-tags-automatically
     */
    input,
    select,
    textarea,
    button {
      font-family: inherit;
      font-size: inherit;
    }
  `;
  return <Global styles={global} />;
};
