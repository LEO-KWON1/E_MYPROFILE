import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import PricingSection from '../components/home/PricingSection';

const MotionBox = motion(Box);

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [colorIndex, setColorIndex] = useState(0);

  // 텍스트 색상 순환
  const txts = [
    "한 번의 탭으로",
    "나를 표현하고",
    "쉽게, 확실하게, 빠르게 보여주는"
  ];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // 마우스 위치를 -1에서 1 사이의 값으로 정규화
      const normalizedX = (clientX - centerX) / centerX;
      const normalizedY = (clientY - centerY) / centerY;
      
      // 이미지 이동 범위 제한 (예: 20px)
      x.set(normalizedX * 20);
      y.set(normalizedY * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % txts.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 이미지 랜덤 이동
  useEffect(() => {
    const moveImage = () => {
      const image = imageRef.current;
      const section = sectionRef.current;
      if (!image || !section) return;
      const sectionHeight = section.clientHeight;
      const sectionWidth = section.clientWidth;
      const moveableHeight = sectionHeight - image.clientHeight;
      const moveableWidth = sectionWidth - image.clientWidth;
      const randomTop = Math.random() * moveableHeight;
      const randomLeft = Math.random() * moveableWidth;
      image.style.position = 'absolute';
      image.style.top = `${randomTop}px`;
      image.style.left = `${randomLeft}px`;
      image.style.zIndex = '10';
      image.style.pointerEvents = 'none';
    };
    moveImage();
    const interval = setInterval(moveImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <Box
        ref={sectionRef}
        id="section-1"
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
        {/* 움직이는 이미지 */}
        <Box
          component="img"
          id="moving-image"
          ref={imageRef}
          src="/images/moving_image.png"
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
              {/* 텍스트 */}
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, mb: 2, lineHeight: 1.2 }}>
                {txts.map((txt, idx) => (
                  <span
                    key={idx}
                    className="txt1-1"
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

      {/* Features Section */}
      <FeaturesSection />

      {/* How it Works Section */}
      <HowItWorksSection />

      {/* Pricing Section */}
      <PricingSection />
    </Layout>
  );
};

export default Home; 