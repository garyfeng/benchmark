import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import typography from '../../../styles/typography.module.css';
import '../../../styles/reset.css';
import '../../../styles/fonts.css';

import ThemeProvider from '../../../components/ThemeProvider';
import css from './CodeFrame.module.css';

class CodeFrame extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      theme: props.themes.indexOf(props.theme) || 0
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ theme: (this.state.theme + 1) % this.props.themes.length });
  }

  render() {
    return (
      <div className={classnames(css.codeframe, global.base, typography.base)}>
        <ThemeProvider theme={this.props.themes[this.state.theme]}>
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
          <div className={css.content}>{this.props.children}</div>
        </ThemeProvider>
      </div>
    );
  }
}

CodeFrame.propTypes = {
  themes: PropTypes.array,
  theme: PropTypes.string
};

CodeFrame.defaultProps = {
  themes: ['Default', 'Dark', 'Beige'],
  theme: 'Default'
};

export default CodeFrame;
