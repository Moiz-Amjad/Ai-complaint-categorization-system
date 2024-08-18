"use client";
import { useState } from 'react';
import { Typography, TextField, Button, Box, CircularProgress, Alert } from '@mui/material';
import Layout from '../components/Layout';

export default function SubmitComplaint() {
  const [complaint, setComplaint] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: complaint }),
      });
      const data = await response.json();
      setResult({ success: response.ok, message: response.ok ? 'Complaint submitted successfully' : data.error });
    } catch (error) {
      setResult({ success: false, message: 'An error occurred while submitting the complaint' });
    }
    setLoading(false);
  };

  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Submit a Complaint
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="complaint"
          label="Your Complaint"
          name="complaint"
          multiline
          rows={4}
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Submit Complaint'}
        </Button>
      </Box>
      {result && (
        <Alert severity={result.success ? 'success' : 'error'} sx={{ mt: 2 }}>
          {result.message}
        </Alert>
      )}
    </Layout>
  );
}