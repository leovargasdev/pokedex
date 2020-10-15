import React, { useState, useEffect, SVGProps } from 'react';
import { useTheme } from 'styled-components';

import pokemonTypes from '../../assets/types';
import { Pokeball } from '../../assets/patterns';

import {
  Container,
  Pokemon,
  PokemonNumber,
  PokemonName,
  PokemonType,
} from './styles';
import api from '../../services/api';

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

      let backgroundColor: keyof typeof pokemonTypes = types[0].type.name;

      if (backgroundColor === 'normal' && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      setPokemon({
        id,
        backgroundColor: theme.colors.backgroundType[backgroundColor],
        image: sprites.other['official-artwork'].front_default,
        type: types.map((pokemonType: TypePokemonResponse) => ({
          name: pokemonType.type.name,
          icon: pokemonTypes[pokemonType.type.name],
          color: theme.colors.type[pokemonType.type.name],
        })),
      });
    });
  }, [name, theme.colors]);

  return (
    <Container to={`pokemon/${name}`} color={pokemon.backgroundColor}>
      <Pokemon>
        <PokemonNumber>#{pokemon.id}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
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
      </Pokemon>
      {pokemon.image && (
        <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
      )}
    </Container>
  );
};

export default CardPokemon;
