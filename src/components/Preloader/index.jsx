import React from 'react';
import { Box, Circle, Container } from './styles';

// eslint-disable-next-line react/prop-types
const Preloader = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Box {...props}>
    <Container>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </Container>
  </Box>
);

export default Preloader;
