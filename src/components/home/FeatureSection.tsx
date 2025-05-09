import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: '디지털 명함',
    description: 'QR코드로 쉽고 빠르게 명함을 공유하세요.',
    icon: '🎯',
  },
  {
    title: '브랜드 관리',
    description: '나만의 브랜드를 효과적으로 관리하고 홍보하세요.',
    icon: '🎨',
  },
  {
    title: '연락처 관리',
    description: '받은 명함을 자동으로 정리하고 관리하세요.',
    icon: '📱',
  },
  {
    title: '분석 대시보드',
    description: '명함 공유 현황과 방문자 통계를 확인하세요.',
    icon: '📊',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          주요 기능
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSection; 