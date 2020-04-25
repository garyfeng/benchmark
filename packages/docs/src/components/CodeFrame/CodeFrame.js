import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThemeProvider } from '@coreym/benchmark';
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
      <div className={classnames(css.codeframe, global.base)}>
        <ThemeProvider>
          <div className={css.toolbar}>
            <div className={css.codeUtils}>
              <div>
                <button
                  className={css.util}
                  onClick={() => this.props.onToggleCode()}
                >
                  Code
                </button>
              </div>
              <div>
                <button className={css.util} onClick={this.toggleTheme}>
                  Theme
                </button>
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
