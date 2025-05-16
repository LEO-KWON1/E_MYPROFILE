import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  PersonAdd,
  Create,
  Link as LinkIcon,
  Share,
  Campaign,
} from '@mui/icons-material';

const steps = [
  {
    icon: <PersonAdd sx={{ fontSize: 40 }} />,
    title: '구독하기',
    description: '간단한 회원가입으로 시작하세요.',
  },
  {
    icon: <Create sx={{ fontSize: 40 }} />,
    title: '명함 생성',
    description: '나만의 디지털 명함을 만들어보세요.',
  },
  {
    icon: <LinkIcon sx={{ fontSize: 40 }} />,
    title: '링크 추가',
    description: 'SNS와 쇼핑몰 링크를 연결하세요.',
  },
  {
    icon: <Share sx={{ fontSize: 40 }} />,
    title: '공유하기',
    description: '생성된 명함을 손쉽게 공유하세요.',
  },
  {
    icon: <Campaign sx={{ fontSize: 40 }} />,
    title: '푸시 메시지',
    description: '효과적인 마케팅을 시작하세요.',
  },
];

const MotionPaper = motion(Paper);

const HowItWorksSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          사용 방법
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={step.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    color: 'white',
                    mb: 2,
                  }}
                >
                  {step.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection; 