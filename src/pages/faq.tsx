import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Layout from '../components/layout/Layout';

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" align="center" gutterBottom>
            자주 묻는 질문
          </Typography>
          <Paper sx={{ p: 4, mt: 4 }}>
            <Typography variant="body1" align="center">
              자주 묻는 질문 페이지 준비 중입니다.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};

export default FAQPage; 