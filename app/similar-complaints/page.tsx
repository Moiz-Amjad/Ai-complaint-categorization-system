"use client";
import { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText, Box, CircularProgress } from '@mui/material';
import Layout from '../components/Layout';

interface SimilarComplaint {
  id: string;
  text: string;
  score: number;
}

export default function SimilarComplaints() {
  const [query, setQuery] = useState('');
  const [similarComplaints, setSimilarComplaints] = useState<SimilarComplaint[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`/api/similar-complaints?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      setSimilarComplaints(data.similar_complaints);
    } catch (error) {
      console.error('Error fetching similar complaints:', error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Find Similar Complaints
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="query"
          label="Search Query"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Search'}
        </Button>
      </Box>
      {similarComplaints.length > 0 && (
        <List>
          {similarComplaints.map((complaint) => (
            <ListItem key={complaint.id}>
              <ListItemText
                primary={complaint.text}
                secondary={`Similarity Score: ${complaint.score.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Layout>
  );
}