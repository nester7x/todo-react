import React, { FC } from 'react';

import { Box, Circle, Container } from './styles';

const Preloader: FC = () => (
  <Box>
    <Container>
      {Array.from({ length: 4 }).map((_, index) => (
        <Circle key={index} />
      ))}
    </Container>
  </Box>
);

export default Preloader;
