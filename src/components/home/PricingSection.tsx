import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const plans = [
  {
    title: '무료',
    price: '0',
    period: '월',
    features: [
      '기본 디지털 명함 1개',
      '기본 템플릿 사용',
      'SNS 링크 3개',
      '기본 통계',
    ],
    buttonText: '시작하기',
    highlighted: false,
  },
  {
    title: '정기 구독',
    price: '9,900',
    period: '월',
    features: [
      '디지털 명함 무제한',
      '프리미엄 템플릿 사용',
      'SNS/쇼핑몰 링크 무제한',
      '상세 통계',
      '푸시 메시지 발송',
      '고객 관리',
    ],
    buttonText: '구독하기',
    highlighted: true,
  },
  {
    title: '연간 구독',
    price: '99,000',
    period: '년',
    features: [
      '정기 구독의 모든 기능',
      '2개월 무료',
      '우선 지원',
      '맞춤 템플릿 제공',
    ],
    buttonText: '연간 구독하기',
    highlighted: false,
  },
];

const MotionCard = motion(Card);

const PricingSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          요금제
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={plan.title}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  ...(plan.highlighted && {
                    border: 2,
                    borderColor: 'secondary.main',
                    transform: 'scale(1.05)',
                    '@media (max-width: 960px)': {
                      transform: 'scale(1)',
                    },
                  }),
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Box sx={{ my: 2 }}>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                      ₩{plan.price}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      / {plan.period}
                    </Typography>
                  </Box>
                  <List sx={{ my: 2 }}>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    variant={plan.highlighted ? 'contained' : 'outlined'}
                    color={plan.highlighted ? 'secondary' : 'primary'}
                    fullWidth
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection; 