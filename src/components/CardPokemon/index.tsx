import React, { useState, useEffect, SVGProps, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { Container, PokemonInfo, PokemonType } from './styles';
import api from '../../services/api';

import pokemonTypes from '../../assets/types';
import { Pokeball } from '../../assets/patterns';

interface PokemonTypesProps {
  name: string;
  icon: SVGProps<SVGSVGElement>;
  color: string;
}

interface PokemonProps {
  id: string;
  backgroundColor: string;
  image: string;
  type: PokemonTypesProps[];
}

interface TypePokemonResponse {
  type: {
    name: keyof typeof pokemonTypes;
  };
}

const CardPokemon: React.FC<{ name: string }> = ({ name }) => {
  const theme = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, types, sprites } = response.data;

      const backgroundColor: keyof typeof pokemonTypes = types[0].type.name;

      setPokemon({
        id,
        backgroundColor: theme.colors.type[backgroundColor],
        image: sprites.other.dream_world.front_default,
        type: types.map((pokemonType: TypePokemonResponse) => ({
          name: pokemonType.type.name,
          icon: pokemonTypes[pokemonType.type.name],
          color: theme.colors.type[pokemonType.type.name],
        })),
      });
    });
  }, [name, theme.colors]);

  return (
    <Container key={pokemon.id} color={pokemon.backgroundColor}>
      <PokemonInfo>
        <span>#{pokemon.id}</span>
        <h3>{name}</h3>
        {pokemon.type && (
          <div>
            {pokemon.type.map(pokemonType => (
              <PokemonType color={pokemonType.color} key={pokemonType.name}>
                {pokemonType.icon} <span>{pokemonType.name}</span>
              </PokemonType>
            ))}
          </div>
        )}
        <Pokeball />
      </PokemonInfo>
      <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
    </Container>
  );
};

export default CardPokemon;
