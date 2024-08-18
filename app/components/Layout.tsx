"use client";
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spend Ruby Complaint System
          </Typography>
          <Box sx={{ '& > *': { marginLeft: 2 } }}>
            <Link href="/" passHref>
              <Typography component="a" color="inherit">Home</Typography>
            </Link>
            <Link href="/submit-complaint" passHref>
              <Typography component="a" color="inherit">Submit Complaint</Typography>
            </Link>
            <Link href="/view-complaints" passHref>
              <Typography component="a" color="inherit">View Complaints</Typography>
            </Link>
            <Link href="/similar-complaints" passHref>
              <Typography component="a" color="inherit">Similar Complaints</Typography>
            </Link>
            <Link href="/dashboard" passHref>
              <Typography component="a" color="inherit">Dashboard</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.paper' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 Spend Ruby. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;