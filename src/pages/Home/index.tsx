import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Box, PokemonInfo } from './styles';

import { Pokeball } from '../../assets/patterns';
// import pokemonTypes from '../../assets/types';

interface PokemonProps {
  id: string;
  name: string;
  color: string;
}

const Home: React.FC = () => {
  const theme = useTheme();

  const pokemons: PokemonProps[] = [
    { id: '000', name: 'Bulbasaur', color: theme.colors.type.flying },
    { id: '002', name: 'Ivysaur', color: theme.colors.type.rock },
    { id: '003', name: 'Venusaur', color: theme.colors.type.dark },
    { id: '004', name: 'Charmander', color: theme.colors.type.ground },
    { id: '005', name: 'Bulbasaur', color: theme.colors.type.psychic },
    { id: '006', name: 'Charmander', color: theme.colors.type.fairy },
  ];

  return (
    <Container>
      {pokemons.map((pokemon, index) => (
        <Box key={pokemon.id} color={pokemon.color}>
          <PokemonInfo>
            <span>{`#${pokemon.id}`}</span>
            <h3>{pokemon.name}</h3>
            <Pokeball />
          </PokemonInfo>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              index + 1
            }.svg`}
            alt="Sprit pokemon"
          />
        </Box>
      ))}
    </Container>
  );
};

export default Home;
