import React, { useState, useEffect, SVGProps, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

import api from '~/services/api';
import pokemonTypes from '~/assets/types';
import { Pokeball } from '~/assets/patterns';

import About from './screens/About';
import Evolution from './screens/Evolution';
import Stats from './screens/Stats';

import {
  Container,
  GoBack,
  BackgroundNamePokemon,
  Content,
  Header,
  PokemonLoader,
  // PokemonCircle,
  PokemonNumber,
  PokemonName,
  PokemonType,
  SectionsName,
  ContentSection,
  SectionsNameButton,
} from './styles';

interface RouteParams {
  name: string;
}

export interface PokemonTypesProps {
  name?: string;
  icon: SVGProps<SVGSVGElement>;
  color: string;
}

export interface PokemonProps {
  id: number;
  number: string;
  image: string;
  specie: string;
  height: string;
  weight: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
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

  const [nameSectionActive, setNameSectionActive] = useState('about');
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [backgroundColor, setBackgroundColor] = useState<
    keyof typeof pokemonTypes
  >('normal');

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const {
        id,
        weight,
        height,
        stats,
        sprites,
        types,
        species,
      } = response.data;

      setBackgroundColor(types[0].type.name);

      if (types[0].type.name === 'normal' && types.length > 1) {
        setBackgroundColor(types[1].type.name);
      }

      setPokemon({
        id,
        number: `#${'000'.substr(id.toString().length)}${id}`,
        image:
          sprites.other['official-artwork'].front_default ||
          sprites.front_default,
        weight: `${weight / 10} kg`,
        specie: species.name,
        height: `${height / 10} m`,
        stats: {
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          specialAttack: stats[3].base_stat,
          specialDefense: stats[4].base_stat,
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

  const screenSelected = useMemo(() => {
    const color = colors.type[backgroundColor];
    switch (nameSectionActive) {
      case 'about':
        return <About pokemon={pokemon} colorText={color} />;
      case 'stats':
        return pokemon.stats && <Stats stats={pokemon.stats} color={color} />;
      case 'evolution':
        return <Evolution name={name} color={color} />;
      default:
        return <></>;
    }
  }, [nameSectionActive, colors, backgroundColor, pokemon, name]);

  return (
    <Container color={colors.backgroundType[backgroundColor]}>
      <GoBack to="/">
        <FaChevronLeft size={50} />
      </GoBack>
      <BackgroundNamePokemon>
        <h1>{name}</h1>
      </BackgroundNamePokemon>

      <Content>
        <Header>
          <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
          <PokemonLoader
            colorBackground={colors.backgroundType[backgroundColor]}
            colorType="rgba(255,255,255,0.6)"
          >
            <span />
          </PokemonLoader>
          {/* <PokemonCircle color={colors.backgroundType[backgroundColor]} /> */}
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

        <SectionsName>
          {['about', 'stats', 'evolution'].map(nameSection => (
            <SectionsNameButton
              key={nameSection}
              type="button"
              onClick={() => setNameSectionActive(nameSection)}
              active={nameSection === nameSectionActive}
            >
              {nameSection}
              {nameSection === nameSectionActive && <Pokeball />}
            </SectionsNameButton>
          ))}
        </SectionsName>

        <ContentSection>{screenSelected}</ContentSection>
      </Content>
    </Container>
  );
};

export default Pokemon;
