import React from 'react';
import { ThemeProvider, Global } from '@coreym/benchmark';

export default class FrameComponent extends React.Component {
  render() {
    return (
      <>
        <Global />
        <ThemeProvider>{this.props.children}</ThemeProvider>
      </>
    );
  }
}
