import React, { useState, useEffect } from 'react';

import CardPokemon from '../../components/CardPokemon';
import { Container } from './styles';

import api from '../../services/api';

interface PokemonProps {
  id: string;
  name: string;
  color: string;
}

const Home: React.FC = () => {
  const NUMBER_POKEMONS = 12;
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
    </Container>
  );
};

export default Home;
