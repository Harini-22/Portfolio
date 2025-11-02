'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3b82f6', // blue-500
    },
    secondary: {
      main: '#8b5cf6', // purple-500
    },
  },
  typography: {
    fontFamily: 'inherit',
  },
  components: {
    MuiStepper: {
      styleOverrides: {
        root: {
          '& .MuiStepLabel-root': {
            '& .MuiStepLabel-label': {
              fontSize: '0.875rem',
              fontWeight: 500,
            },
          },
        },
      },
    },
  },
});

export default function MaterialUIThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

