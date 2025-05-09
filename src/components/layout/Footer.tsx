import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              e-myprofile
            </Typography>
            <Typography variant="body2" color="text.secondary">
              디지털 명함으로 나만의 브랜드를 만들어보세요
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              고객지원
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} href="/faq" color="text.secondary">
                자주 묻는 질문
              </MuiLink>
              <MuiLink component={Link} href="/contact" color="text.secondary">
                1:1 문의하기
              </MuiLink>
              <MuiLink component={Link} href="/guide" color="text.secondary">
                사용 가이드
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              법적 고지
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} href="/terms" color="text.secondary">
                이용약관
              </MuiLink>
              <MuiLink component={Link} href="/privacy" color="text.secondary">
                개인정보처리방침
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 e-myprofile. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              사업자등록번호: 123-45-67890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              대표: 홍길동
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 