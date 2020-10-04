import React, { useState, useEffect, SVGProps } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import api from '../../services/api';
import pokemonTypes from '../../assets/types';

import {
  Container,
  BackgroundNamePokemon,
  Content,
  Header,
  PokemonCircle,
  PokemonNumber,
  PokemonName,
  PokemonType,
} from './styles';

interface RouteParams {
  name: string;
}

interface PokemonTypesProps {
  name: string;
  icon: SVGProps<SVGSVGElement>;
  color: string;
}

interface PokemonProps {
  id: number;
  number: string;
  image: string;
  height: number;
  weight: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  type: PokemonTypesProps[];
}

interface TypePokemonResponse {
  type: {
    name: keyof typeof pokemonTypes;
  };
}

const Pokemon: React.FC = () => {
  const { colors } = useTheme();
  const { name } = useParams() as RouteParams;
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [backgroundColor, setBackgroundColor] = useState<
    keyof typeof pokemonTypes
  >('normal');

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, weight, height, stats, sprites, types } = response.data;
      setBackgroundColor(types[0].type.name);

      if (types[0].type.name === 'normal' && types.length > 1) {
        setBackgroundColor(types[1].type.name);
      }

      setPokemon({
        id,
        number: `#${'000'.substr(id.toString().length)}${id}`,
        image: sprites.other['official-artwork'].front_default,
        weight,
        height,
        stats: {
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          speed: stats[5].base_stat,
        },
        type: types.map((pokemonType: TypePokemonResponse) => ({
          name: pokemonType.type.name,
          icon: pokemonTypes[pokemonType.type.name],
          color: colors.type[pokemonType.type.name],
        })),
      });
    });
  }, [name, colors]);

  return (
    <Container color={colors.backgroundType[backgroundColor]}>
      <BackgroundNamePokemon>
        <h1>{name}</h1>
      </BackgroundNamePokemon>

      <Content>
        <Header>
          <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
          <PokemonCircle color={colors.backgroundType[backgroundColor]} />
          <div>
            <PokemonNumber>{pokemon.number}</PokemonNumber>
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
          </div>
        </Header>

        <span>aaa</span>
      </Content>
    </Container>
  );
};

export default Pokemon;