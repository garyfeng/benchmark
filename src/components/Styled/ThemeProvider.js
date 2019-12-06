import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from './themes/default.js';

const ThemeProvider = ({ theme, children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);

ThemeProvider.defaultProps = {
  theme
};

export default ThemeProvider;
