import React from 'react';
import ThemeProvider from '../ThemeProvider';

export default class FrameComponent extends React.Component {
  render() {
    return <ThemeProvider>{this.props.children}</ThemeProvider>;
  }
}
