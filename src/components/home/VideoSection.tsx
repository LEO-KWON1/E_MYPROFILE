import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const VideoSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" sx={{ mb: 4 }}>
          사용 방법 영상
        </Typography>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: '65%', // 65%로 조정
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(60,158,231,0.10)',
            background: '#000',
          }}
        >
          <video
            src="images/how_to_use.mp4"
            controls
            className="w-full rounded-lg shadow-xl"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection; 