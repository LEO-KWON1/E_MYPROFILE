import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DigitalCardSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          디지털 명함 미리보기
        </Typography>
        
        <Box
          sx={{
            perspective: '1000px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '500px',
          }}
        >
          <motion.div
            animate={{
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformStyle: 'preserve-3d',
              width: '300px',
              height: '500px',
              position: 'relative',
            }}
          >
            {/* 앞면 */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="images/ex1.jpg"
                alt="디지털 명함 예시 1"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </Box>

            {/* 뒷면 */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="images/ex2.jpg"
                alt="디지털 명함 예시 2"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default DigitalCardSection; 