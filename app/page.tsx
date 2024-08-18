import { Typography, Button, Grid, Paper } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Spend Ruby Complaint System
          </Typography>
          <Typography variant="h5" paragraph>
            Our AI-powered system helps categorize and analyze e-commerce complaints efficiently.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 200 }}>
            <Typography variant="h6" gutterBottom>
              Submit a Complaint
            </Typography>
            <Typography variant="body1" paragraph>
              Have an issue? Let us know and our AI will categorize it for you.
            </Typography>
            <Link href="/submit-complaint" passHref>
              <Button variant="contained" color="primary">
                Submit Complaint
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 200 }}>
            <Typography variant="h6" gutterBottom>
              View Complaints
            </Typography>
            <Typography variant="body1" paragraph>
              Browse through categorized complaints and their summaries.
            </Typography>
            <Link href="/view-complaints" passHref>
              <Button variant="contained" color="primary">
                View Complaints
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 200 }}>
            <Typography variant="h6" gutterBottom>
              Find Similar Complaints
            </Typography>
            <Typography variant="body1" paragraph>
              Use our RAG pipeline to find complaints similar to yours.
            </Typography>
            <Link href="/similar-complaints" passHref>
              <Button variant="contained" color="primary">
                Similar Complaints
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </main>
  )
}