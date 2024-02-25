// Third party imports
import { Container, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

// Local imports
import { IconsConstant } from '../../constants';

const HomeContainer = styled(Container)(({ theme: { palette } }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(315deg, #7950f2 5%, #748ffc 95%)',
  color: palette.primary.contrastText,
}));

function HomePage(): React.ReactElement<{}> {
  const text = 'Welcome to React StarterKit'.split(' ');
  return (
    <HomeContainer>
      <Typography variant="h1">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{' '}
          </motion.span>
        ))}
      </Typography>
      <IconsConstant.common.rocket />
    </HomeContainer>
  );
}

export default HomePage;
