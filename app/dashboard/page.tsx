"use client";
import { useState, useEffect } from 'react';
import { Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import Layout from '../components/Layout';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DashboardData {
  totalComplaints: number;
  categoryCounts: { [key: string]: number };
}

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(response => response.json())
      .then(data => {
        setDashboardData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels: dashboardData ? Object.keys(dashboardData.categoryCounts) : [],
    datasets: [
      {
        label: 'Number of Complaints',
        data: dashboardData ? Object.values(dashboardData.categoryCounts) : [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Complaints by Category',
      },
    },
  };

  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Total Complaints
              </Typography>
              <Typography variant="h3" component="div">
                {dashboardData?.totalComplaints}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Bar options={chartOptions} data={chartData} />
            </Paper>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}