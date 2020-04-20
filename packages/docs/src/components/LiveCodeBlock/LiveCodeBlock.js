import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as Components from '@coreym/benchmark';
import CodeFrame from '../CodeFrame';
import css from './LiveCodeBlock.module.css';
import codeTheme from './themes/default.js';

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
      <Components.Box border="1" borderColor="n.300">
        <LiveProvider code={children}>
          <CodeFrame onToggleCode={() => toggleCode(!showEditor)}>
            <LivePreview className={css.preview} />
          </CodeFrame>
        </LiveProvider>
      </Components.Box>
    );
  }
  return (
    <Components.Box border="1" borderColor="n.300" mb="4" mt="2">
      <LiveProvider
        code={children.trim()}
        scope={{ ...Components }}
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
    </Components.Box>
  );
};
