import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from './CodeFrame.module.css';

import typography from '../../../styles/typography.module.css';
import '../../../styles/reset.css';
import '../../../styles/fonts.css';

import ThemeProvider from '../../../components/ThemeProvider';

class CodeFrame extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      theme: 0
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ theme: (this.state.theme + 1) % this.props.themes.length });
  }

  render() {
    return (
      <div className={classnames(global.base, typography.base)}>
        <div className={css.toolbar}>
          <div className={css.codeUtils}>
            <div className={css.util}>
              <span onClick={() => this.props.onToggleCode()}>Code</span>
            </div>
            <div className={css.util}>
              <span>Playroom</span>
            </div>
            <div className={css.util}>
              <span onClick={this.toggleTheme}>Theme</span>
            </div>
          </div>
        </div>
        <ThemeProvider theme={this.props.themes[this.state.theme]}>
          <div className={css.content}>{this.props.children}</div>
        </ThemeProvider>
      </div>
    );
  }
}

CodeFrame.propTypes = {
  themes: PropTypes.array
};

CodeFrame.defaultProps = {
  themes: ['Default', 'Dark', 'Beige']
};

export default CodeFrame;
