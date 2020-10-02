import React from 'react';
import { useTheme } from 'styled-components';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <h1 style={{ fontSize: 150, color: theme.colors.type.psychic }}>
      Bulbasaur
    </h1>
  );
};

export default Home;
