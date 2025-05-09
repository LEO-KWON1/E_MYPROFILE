import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FeatureCard from './FeatureCard';
import {
  Business,
  Link as LinkIcon,
  Store,
  Share,
  Analytics,
  Message,
} from '@mui/icons-material';

const features = [
  {
    icon: <Business sx={{ fontSize: 40 }} />,
    title: '디지털 명함 생성/관리',
    description: '쉽고 빠르게 디지털 명함을 만들고 관리하세요.',
  },
  {
    icon: <LinkIcon sx={{ fontSize: 40 }} />,
    title: '고유 URL 제공',
    description: '나만의 고유한 URL로 명함을 공유하세요.',
  },
  {
    icon: <Store sx={{ fontSize: 40 }} />,
    title: '브랜드 공간 구성',
    description: '나만의 브랜드 공간을 자유롭게 꾸며보세요.',
  },
  {
    icon: <Share sx={{ fontSize: 40 }} />,
    title: 'SNS/쇼핑몰 연동',
    description: '다양한 SNS와 쇼핑몰 링크를 한 곳에서 관리하세요.',
  },
  {
    icon: <Message sx={{ fontSize: 40 }} />,
    title: 'CRM 마케팅',
    description: '푸시 메시지로 효과적인 마케팅을 진행하세요.',
  },
  {
    icon: <Analytics sx={{ fontSize: 40 }} />,
    title: '고객 반응 분석',
    description: '명함 공유와 조회 현황을 실시간으로 확인하세요.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'grey.50' }}>
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
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 