import React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as PatternPokeball } from '../../assets/patterns/pokeball.svg';

import { Container, Box } from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box color={theme.colors.type.flying}>
        <span>aaa</span>
        <PatternPokeball />
      </Box>
      <Box color={theme.colors.type.rock}>
        <span>aaa</span>
        <PatternPokeball />
      </Box>
      <Box color={theme.colors.type.dark}>
        <span>aaa</span>
        <PatternPokeball />
      </Box>
      <Box color={theme.colors.type.ground}>
        <span>aaa</span>
        <PatternPokeball />
      </Box>
      <Box color={theme.colors.type.psychic}>
        <span>aaa</span>
        <PatternPokeball />
      </Box>
      <Box color={theme.colors.type.fairy}>
        <span>aaa</span>
        <PatternPokeball />
      </Box>
    </Container>
  );
};

export default Home;
