import React, { useState, useEffect, useCallback } from 'react';

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
  const NUMBER_POKEMONS = 9;
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [pokemonsOffset, setPokemonsOffset] = useState(9);

  useEffect(() => {
    if (pokemonSearch.length >= 2) {
      api.get('/pokemon?limit=750').then(response => {
        setPokemonSearch(pokemonSearch.toLocaleLowerCase());
        // Validado quais nomes dos pokémons consta na parte da string digitada pelo usuário.
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

  const handleMorePokemons = useCallback(
    offset => {
      api
        .get(`/pokemon`, {
          params: {
            limit: NUMBER_POKEMONS,
            offset,
          },
        })
        .then(response => {
          setPokemons(state => [...state, ...response.data.results]);
          setPokemonsOffset(state => state + NUMBER_POKEMONS);
        });
    },
    [NUMBER_POKEMONS],
  );

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

      {pokemonSearch.length <= 2 && (
        <button
          type="button"
          onClick={() => handleMorePokemons(pokemonsOffset)}
        >
          Carregar mais
        </button>
      )}
    </Container>
  );
};

export default Home;
