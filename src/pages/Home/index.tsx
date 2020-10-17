import React, { useState, useEffect, useCallback } from 'react';

import CardPokemon from '~/components/CardPokemon';
import InputSearch from '~/components/InputSearch';

import api from '~/services/api';
import { Pokeball } from '~/assets/patterns';

import { Container, Pokemons } from './styles';

interface PokemonProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const NUMBER_POKEMONS = 9;
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);

  // Filtra os pokémons a partir da string digita no input de busca
  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());
    // Valida nomes dos pokémons constam no valor da variável pokemonSearch
    const pokemonsSearch = response.data.results.filter(
      ({ name }: PokemonProps) => name.includes(pokemonSearch),
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  // Carrega uma lista inicial de pokémons
  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get('/pokemon', {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    setPokemons(response.data.results);
  }, []);

  useEffect(() => {
    // A busca é só feita quando a string tiver 2 ou mais caracteres
    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) handleSearchPokemons();
    else handlePokemonsListDefault();
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  // Adiciona novos pokémons a lista
  const handleMorePokemons = useCallback(
    async offset => {
      const response = await api.get(`/pokemon`, {
        params: {
          limit: NUMBER_POKEMONS,
          offset,
        },
      });

      setPokemons(state => [...state, ...response.data.results]);
      setPokemonsOffsetApi(state => state + NUMBER_POKEMONS);
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
          onClick={() => handleMorePokemons(pokemonsOffsetApi)}
        >
          CARREGAR MAIS
        </button>
      )}
    </Container>
  );
};

export default Home;
