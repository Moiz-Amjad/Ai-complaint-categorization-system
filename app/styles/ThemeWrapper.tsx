// app/styles/ThemeWrapper.tsx
'use client'; // This ensures the component is run on the client side

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00A86B',
    },
    background: {
      default: '#0A2F35',
      paper: '#0E4B43',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
