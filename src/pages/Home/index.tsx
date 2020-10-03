import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import CardPokemon from '../../components/CardPokemon';
import { Container, Box, PokemonInfo, PokemonType } from './styles';

import { Pokeball } from '../../assets/patterns';
import pokemonTypes from '../../assets/types';
import api from '../../services/api';

interface PokemonProps {
  id: string;
  name: string;
  color: string;
}

const Home: React.FC = () => {
  const NUMBER_POKEMONS = 12;
  const theme = useTheme();
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    api
      .get(`/pokemon`, {
        params: {
          limit: NUMBER_POKEMONS,
        },
      })
      .then(response => setPokemons(response.data.results));
  }, [NUMBER_POKEMONS]);

  return (
    <Container>
      {pokemons.map(pokemon => (
        <CardPokemon key={pokemon.name} name={pokemon.name} />
      ))}
      {/* {pokemons.map((pokemon, index) => (
        <Box key={pokemon.id} color={pokemon.color}>
          <PokemonInfo>
            <span>{`#${pokemon.id}`}</span>
            <h3>{pokemon.name}</h3>
            <div>
              <PokemonType color={theme.colors.type.water}>
                {pokemonTypes.grass} <span>Grass</span>
              </PokemonType>
              <PokemonType color={theme.colors.type.poison}>
                {pokemonTypes.poison} <span>Poison</span>
              </PokemonType>
            </div>
            <Pokeball />
          </PokemonInfo>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              index + 1
            }.svg`}
            alt="Sprit pokemon"
          />
        </Box>
      ))} */}
    </Container>
  );
};

export default Home;
