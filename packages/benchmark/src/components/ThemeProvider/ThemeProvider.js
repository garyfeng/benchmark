import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../themes/default.js';
import { Box } from '../Base';

const ThemeProvider = ({ theme, children }) => (
  <EmotionThemeProvider theme={theme}>
    <Box
      bg="n.0"
      sx={{
        width: '100%',
        height: '100%',
        fontSize: 3
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
