import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Pokeball } from '../../../../assets/patterns';

import {
  Container,
  EvolutionRow,
  EvolutionPokemon,
  EvolutionPokemonImage,
} from './styles';

interface EvolutionProps {
  name: string;
  image: string;
}

const Evolution: React.FC<EvolutionProps> = ({ image, name }) => {
  return (
    <Container>
      <h1>Evolution Chart</h1>

      <EvolutionRow>
        <EvolutionPokemon>
          <EvolutionPokemonImage>
            <Pokeball />
            <img src={image} alt={`Imagem do pokémon ${name}`} />
          </EvolutionPokemonImage>
          <p>#001</p>
          <h4>{name}</h4>
        </EvolutionPokemon>

        <FaLongArrowAltRight size={80} />

        <EvolutionPokemon>
          <EvolutionPokemonImage>
            <Pokeball />
            <img src={image} alt={`Imagem do pokémon ${name}`} />
          </EvolutionPokemonImage>
          <p>#001</p>
          <h5>{name}</h5>
        </EvolutionPokemon>
      </EvolutionRow>
    </Container>
  );
};

export default Evolution;
