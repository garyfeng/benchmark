import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import * as Components from '../../../index.js';
import css from './LiveCodeBlock.module.css';
import codeTheme from './themes/github.js';
import CodeFrame from '../CodeFrame';

export default ({ children, render, renderTheme = 'Default' }) => {
  const [showEditor, toggleCode] = useState(false);

  function Editor() {
    return (
      <div className={css.code}>
        <LiveEditor className={css.editor} />
        <div className={css.codeUtils}>
          <span>Copy</span>
        </div>
      </div>
    );
  }

  if (render) {
    return (
      <div className={css.example}>
        <LiveProvider code={children}>
          <CodeFrame onToggleCode={() => toggleCode(!showEditor)}>
            <LivePreview className={css.preview} />
          </CodeFrame>
        </LiveProvider>
      </div>
    );
  }
  return (
    <div className={css.example}>
      <LiveProvider
        code={children.trim()}
        transformCode={code => '/** @jsx mdx */' + code}
        scope={{ mdx, ...Components }}
        theme={codeTheme}
      >
        <CodeFrame
          onToggleCode={() => toggleCode(!showEditor)}
          theme={renderTheme}
        >
          <div className={css.codeframe}>
            <LivePreview className={css.preview} />
          </div>
        </CodeFrame>
        {showEditor ? <Editor /> : null}
        <LiveError className={css.pre} />
      </LiveProvider>
    </div>
  );
};
