import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import themes from '../../themes';

// global
import '../../styles/reset.css';
import '../../styles/fonts.css';
import '../../themes/Default.module.css';

import typography from '../../styles/typography.module.css';
import styles from './ThemeProvider.module.css';

function ThemeProvider({ theme = 'Default', children }) {
  const selectedTheme = themes[theme].theme;
  let classes = classnames(
    styles.base,
    typography.base,
    themes['Default'].theme,
    selectedTheme
  );
  return <div className={classes}>{children}</div>;
}

ThemeProvider.propTypes = {
  theme: PropTypes.oneOf(['Default', 'Beige', 'Dark', 'Docs', 'TTS'])
};

ThemeProvider.defaultProps = {
  theme: 'Default'
};

export default ThemeProvider;
