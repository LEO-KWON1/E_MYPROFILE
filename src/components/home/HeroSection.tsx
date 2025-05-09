import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const txts = [
  '디지털 명함으로',
  '브랜드 가치를',
  '높이세요',
];

// 휴대폰 화면 영역(대략 중앙, 크기 180x320px, 필요시 조정)
const PHONE_SCREEN = {
  left: 'calc(50% - 90px)', // 중앙 기준
  top: 120, // 상단에서 120px 아래 (배경 이미지에 맞게 조정)
  width: 180,
  height: 320,
};

const HeroSection: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [showScreenImage, setShowScreenImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % txts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current || !imageRef.current) return;
      const section = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - section.left;
      const y = e.clientY - section.top;
      const maxX = section.width - 120;
      const maxY = section.height - 120;
      const newX = Math.min(Math.max(0, x - 60), maxX);
      const newY = Math.min(Math.max(0, y - 60), maxY);
      imageRef.current.style.left = `${newX}px`;
      imageRef.current.style.top = `${newY}px`;

      // 휴대폰 화면 영역과 마우스 이미지 중심이 겹치는지 판정
      const phoneLeft = section.width / 2 - PHONE_SCREEN.width / 2;
      const phoneTop = PHONE_SCREEN.top;
      const phoneRight = phoneLeft + PHONE_SCREEN.width;
      const phoneBottom = phoneTop + PHONE_SCREEN.height;
      const imgCenterX = newX + 60;
      const imgCenterY = newY + 60;
      if (
        imgCenterX >= phoneLeft &&
        imgCenterX <= phoneRight &&
        imgCenterY >= phoneTop &&
        imgCenterY <= phoneBottom
      ) {
        setShowScreenImage(true);
      } else {
        setShowScreenImage(false);
      }
    };
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 400,
        backgroundImage: 'url(/images/phone.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: 1,
      }}
    >
      {/* 휴대폰 화면 영역 */}
      <Box
        sx={{
          position: 'absolute',
          left: 'calc(50% - 120px)', // 더 왼쪽으로
          top: 90, // 더 위로
          width: 200,
          height: 340,
          borderRadius: '22px',
          overflow: 'hidden',
          boxShadow: showScreenImage ? '0 0 0 3px #4CAAFF55' : 'none',
          zIndex: 5,
          pointerEvents: 'none',
          background: showScreenImage ? '#fff' : 'transparent',
          transition: 'box-shadow 0.2s, background 0.2s',
          transform: 'rotate(-10deg) skewY(-4deg)',
        }}
      >
        {showScreenImage && (
          <Box
            component="img"
            src="/images/ex2.jpg"
            alt="휴대폰 화면"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </Box>
      {/* 마우스 따라다니는 이미지 */}
      <Box
        component="img"
        id="moving-image"
        ref={imageRef}
        src="/images/ex1.jpg"
        alt="Moving Image"
        sx={{
          width: 120,
          height: 120,
          position: 'absolute',
          top: 0,
          left: 0,
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
          transition: 'top 0.7s cubic-bezier(.4,2,.6,1), left 0.7s cubic-bezier(.4,2,.6,1)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2, lineHeight: 1.2 }}>
              {txts.map((txt, idx) => (
                <span
                  key={idx}
                  style={{ color: colorIndex === idx ? '#4CAAFF' : 'black', transition: 'color 0.3s' }}
                >
                  {txt}
                  <br />
                </span>
              ))}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              디지털 명함과 함께 브랜드 가치를 높이세요
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                href="/signup"
              >
                무료 회원가입
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                href="/download"
              >
                앱 설치하기
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 