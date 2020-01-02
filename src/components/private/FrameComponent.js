import React from 'react';
import ThemeProvider from '../Styled/ThemeProvider';
import Global from '../Styled/Global';

export default class FrameComponent extends React.Component {
  render() {
    return (
      <Global>
        <ThemeProvider>{this.props.children}</ThemeProvider>
      </Global>
    );
  }
}
