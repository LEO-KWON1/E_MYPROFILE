import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import Layout from '../components/layout/Layout';
import { Android, Apple } from '@mui/icons-material';

const DownloadPage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" align="center" gutterBottom>
            앱 다운로드
          </Typography>
          <Paper sx={{ p: 4, mt: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
              <Typography variant="body1" align="center">
                e-myprofile 앱을 다운로드하고 더 편리하게 이용하세요.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Android />}
                  sx={{ minWidth: 200 }}
                >
                  Android 다운로드
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Apple />}
                  sx={{ minWidth: 200 }}
                >
                  iOS 다운로드
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};

export default DownloadPage; 