import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../themes/default.js';
import { Box } from '../Base';

const ThemeProvider = ({ theme, children }) => (
  <EmotionThemeProvider theme={theme}>
    <Box
      sx={{
        color: 'text',
        bg: 'bg',
        width: '100%',
        height: '100%',
        fontSize: 3,
        fontFamily: 'body'
      }}
    >
      {children}
    </Box>
  </EmotionThemeProvider>
);

ThemeProvider.defaultProps = {
  theme
};

export default ThemeProvider;
