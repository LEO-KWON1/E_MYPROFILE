import React from 'react';
import { Box, Container, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const PhysicalCardSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="/images/real.jpg"
                alt="Physical Business Card"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              실물 명함도 함께
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              프리미엄 품질의 실물 명함으로 더욱 전문적인 이미지를 전달하세요
            </Typography>
            <List sx={{ mb: 4 }}>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary="프리미엄 종이 사용" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary="양면 인쇄 가능" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary="QR코드 자동 삽입" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary="무료 배송" />
              </ListItem>
            </List>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ minWidth: 200 }}
              >
                지금 구매하기
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ minWidth: 200 }}
              >
                샘플 보기
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PhysicalCardSection; 