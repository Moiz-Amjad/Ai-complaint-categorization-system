import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spend Ruby Complaint System',
  description: 'AI-powered complaint categorization for e-commerce businesses',
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Spend Ruby
              </Typography>
              <Box>
                <Link href="/" passHref>
                  <Button color="inherit">Home</Button>
                </Link>
                <Link href="/submit-complaint" passHref>
                  <Button color="inherit">Submit</Button>
                </Link>
                <Link href="/view-complaints" passHref>
                  <Button color="inherit">View</Button>
                </Link>
                <Link href="/similar-complaints" passHref>
                  <Button color="inherit">Similar</Button>
                </Link>
                <Link href="/dashboard" passHref>
                  <Button color="inherit">Dashboard</Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}