import React from 'react';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';

export default class FrameComponent extends React.Component {
  render() {
    return (
      <Global>
        <ThemeProvider>{this.props.children}</ThemeProvider>
      </Global>
    );
  }
}
