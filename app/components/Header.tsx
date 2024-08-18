"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      {/* <Toolbar>
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
      </Toolbar> */}
    </AppBar>
  );
}
