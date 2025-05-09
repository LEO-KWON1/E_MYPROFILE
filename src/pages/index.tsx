import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import PricingSection from '../components/home/PricingSection';
import HeroSection from '../components/home/HeroSection';
import DigitalCardSection from '../components/home/DigitalCardSection';
import UseCasesSection from '../components/home/UseCasesSection';
import PhysicalCardSection from '../components/home/PhysicalCardSection';
import CtaSection from '../components/home/CtaSection';
import VideoSection from '../components/home/VideoSection';

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
      {/* HeroSection 맨 위에 추가 */}
      <HeroSection />
      {/* 1. 디지털 명함 미리보기 */}
      <DigitalCardSection />
      {/* 2. 실물 명함도 함께 */}
      <PhysicalCardSection />
      {/* 3. 주요 기능 */}
      <FeaturesSection />
      {/* 4. 사용 방법 */}
      <HowItWorksSection />
      {/* 5. 다양한 사용 사례 */}
      <UseCasesSection />
      {/* 영상 섹션 추가 */}
      <VideoSection />
      {/* 6. 지금 바로 시작하세요 */}
      <CtaSection />
      {/* 7. 요금제 */}
      <PricingSection />
    </Layout>
  );
};

export default Home; 