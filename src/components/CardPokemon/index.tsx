import React, { useState, useEffect, SVGProps } from 'react';
import { useTheme } from 'styled-components';

import api from '~/services/api';
import iconTypePokemon from '~/assets/types';
import { Pokeball } from '~/assets/patterns';

import {
  Container,
  Pokemon,
  PokemonNumber,
  PokemonName,
  PokemonType,
} from './styles';

interface PokemonTypesProps {
  name: string;
  color: string;
  icon: SVGProps<SVGSVGElement>;
}

interface PokemonProps {
  id: string;
  image: string;
  type: PokemonTypesProps[];
  backgroundColor: string;
}

const CardPokemon: React.FC<{ name: string }> = ({ name }) => {
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, types, sprites } = response.data;

      let backgroundColor: keyof typeof iconTypePokemon = types[0].type.name;

      // Qualquer pokémon com duas classes ou mais e que tenha como primeira classe o tipo "normal",
      // Esse codicinal força a pegar a segunda classe, o motivo desse fluxo é a melhor estilização do layout do app
      if (backgroundColor === 'normal' && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      setPokemon({
        id,
        backgroundColor: colors.backgroundType[backgroundColor],
        image: sprites.other['official-artwork'].front_default,
        type: types.map((pokemonType: any) => {
          // Reconhece a variável como uma chave para os arrays pokemonTypes e colors.type
          const typeName = pokemonType.type
            .name as keyof typeof iconTypePokemon;

          return {
            name: typeName,
            icon: iconTypePokemon[typeName],
            color: colors.type[typeName],
          };
        }),
      });
    });
  }, [name, colors]);

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
