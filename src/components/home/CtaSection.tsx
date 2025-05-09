import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const CtaSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center' }}
        >
          <Typography
            variant="h2"
            sx={{ mb: 3 }}
          >
            지금 바로 시작하세요
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 6, opacity: 0.9 }}
          >
            디지털 명함으로 더 스마트한 비즈니스를 경험하세요
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              href="/signup"
              sx={{ minWidth: 200 }}
            >
              무료로 시작하기
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={Link}
              href="/contact"
              sx={{ minWidth: 200 }}
            >
              문의하기
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default CtaSection; 