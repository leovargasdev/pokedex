import React, { useState, useEffect } from 'react';

import CardPokemon from '../../components/CardPokemon';
import InputSearch from '../../components/InputSearch';
import { Pokeball } from '../../assets/patterns';
import api from '../../services/api';

import { Container, Pokemons } from './styles';

interface PokemonProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const NUMBER_POKEMONS = 24;
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');

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
      <Pokeball />
      <h1>Pokédex</h1>

      <InputSearch value={pokemonSearch} onChange={setPokemonSearch} />

      <Pokemons>
        {pokemons.map(pokemon => (
          <CardPokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </Pokemons>
    </Container>
  );
};

export default Home;
