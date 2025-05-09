import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Business,
  Store,
  Person,
  Campaign,
} from '@mui/icons-material';

const useCases = [
  {
    icon: <Person sx={{ fontSize: 40 }} />,
    title: '프리랜서',
    description: '포트폴리오와 연락처를 한 곳에서 관리하고 공유하세요.',
    color: '#3C9EE7',
  },
  {
    icon: <Store sx={{ fontSize: 40 }} />,
    title: '자영업자',
    description: '매장 정보와 SNS를 연결하여 고객과 소통하세요.',
    color: '#2A2E49',
  },
  {
    icon: <Business sx={{ fontSize: 40 }} />,
    title: '중소기업',
    description: '회사 브랜드와 제품을 효과적으로 홍보하세요.',
    color: '#FFA961',
  },
  {
    icon: <Campaign sx={{ fontSize: 40 }} />,
    title: '인플루언서',
    description: '다양한 채널의 콘텐츠를 한 곳에서 관리하세요.',
    color: '#4CAF50',
  },
];

const MotionCard = motion.create(Card);

const UseCasesSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          다양한 사용 사례
        </Typography>
        <Grid container spacing={4}>
          {useCases.map((useCase, index) => (
            <Grid item xs={12} sm={6} md={3} key={useCase.title}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: useCase.color,
                      color: 'white',
                      mb: 2,
                    }}
                  >
                    {useCase.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {useCase.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {useCase.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UseCasesSection; 