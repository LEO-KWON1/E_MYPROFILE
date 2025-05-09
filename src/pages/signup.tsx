import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Layout from '../components/layout/Layout';

const SignupPage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" align="center" gutterBottom>
            회원가입
          </Typography>
          <Paper sx={{ p: 4, mt: 4 }}>
            <Typography variant="body1" align="center">
              회원가입 페이지 준비 중입니다.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};

export default SignupPage; 