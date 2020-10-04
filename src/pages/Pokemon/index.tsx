import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import api from '../../services/api';
import pokemonTypes from '../../assets/types';
import { Circle } from '../../assets/patterns';

import {
  Container,
  BackgroundNamePokemon,
  Content,
  HeaderPokemon,
  HeaderPokemonCircle,
} from './styles';

interface RouteParams {
  name: string;
}

interface PokemonProps {
  id: number;
  image: string;
  height: number;
  weight: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
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
        image: sprites.other['official-artwork'].front_default,
        weight,
        height,
        stats: {
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          speed: stats[5].base_stat,
        },
      });
    });
  }, [name]);

  return (
    <Container color={colors.backgroundType[backgroundColor]}>
      <BackgroundNamePokemon>
        <h1>{name}</h1>
      </BackgroundNamePokemon>

      <Content>
        <HeaderPokemon>
          <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
          <HeaderPokemonCircle color={colors.backgroundType[backgroundColor]} />
        </HeaderPokemon>
      </Content>
    </Container>
  );
};

export default Pokemon;
