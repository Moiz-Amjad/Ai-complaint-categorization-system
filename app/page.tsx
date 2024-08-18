import { Typography, Button, Grid, Paper, Box, Container } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  return (
    <Box sx={{ 
      bgcolor: '#0A2F35', 
      minHeight: '100vh', 
      color: 'white',
      backgroundImage: 'linear-gradient(135deg, #0A2F35 0%, #0E4B43 100%)'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Welcome to Spend Ruby Complaint System
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Our AI-powered system helps categorize and analyze e-commerce complaints efficiently.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={6}
              sx={{ 
                p: 4, 
                display: 'flex', 
                flexDirection: 'column', 
                height: 250,
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                Submit a Complaint
              </Typography>
              <Typography variant="body1" paragraph>
                Have an issue? Let us know and our AI will categorize it for you.
              </Typography>
              <Box sx={{ mt: 'auto' }}>
                <Link href="/submit-complaint" passHref>
                  <Button variant="contained" fullWidth sx={{ 
                    bgcolor: '#00A86B',
                    '&:hover': {
                      bgcolor: '#008C59'
                    }
                  }}>
                    Submit Complaint
                  </Button>
                </Link>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={6}
              sx={{ 
                p: 4, 
                display: 'flex', 
                flexDirection: 'column', 
                height: 250,
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                View Complaints
              </Typography>
              <Typography variant="body1" paragraph>
                Browse through categorized complaints and their summaries.
              </Typography>
              <Box sx={{ mt: 'auto' }}>
                <Link href="/view-complaints" passHref>
                  <Button variant="contained" fullWidth sx={{ 
                    bgcolor: '#00A86B',
                    '&:hover': {
                      bgcolor: '#008C59'
                    }
                  }}>
                    View Complaints
                  </Button>
                </Link>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper 
              elevation={6}
              sx={{ 
                p: 4, 
                display: 'flex', 
                flexDirection: 'column', 
                height: 250,
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                Find Similar Complaints
              </Typography>
              <Typography variant="body1" paragraph>
                Use our RAG pipeline to find complaints similar to yours.
              </Typography>
              <Box sx={{ mt: 'auto' }}>
                <Link href="/similar-complaints" passHref>
                  <Button variant="contained" fullWidth sx={{ 
                    bgcolor: '#00A86B',
                    '&:hover': {
                      bgcolor: '#008C59'
                    }
                  }}>
                    Similar Complaints
                  </Button>
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}