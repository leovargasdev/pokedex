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

  // useEffect(() => {
  //   api
  //     .get(`/pokemon`, {
  //       params: {
  //         limit: NUMBER_POKEMONS,
  //       },
  //     })
  //     .then(response => setPokemons(response.data.results));
  // }, [NUMBER_POKEMONS]);

  useEffect(() => {
    if (pokemonSearch.length >= 2) {
      api.get('/pokemon?limit=750').then(response => {
        setPokemonSearch(pokemonSearch.toLocaleLowerCase());
        // Validado em quais dos nomes dos pokémons consta parte da string digitada pelo usuário.
        const pokemonsSearch = response.data.results.filter(
          ({ name }: PokemonProps) => name.includes(pokemonSearch),
        );
        setPokemons(pokemonsSearch);
      });
    } else {
      api
        .get(`/pokemon`, {
          params: {
            limit: NUMBER_POKEMONS,
          },
        })
        .then(response => setPokemons(response.data.results));
    }
  }, [pokemonSearch]);

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
