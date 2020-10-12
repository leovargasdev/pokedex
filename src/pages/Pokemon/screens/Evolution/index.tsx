import React, { useCallback, useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

import { Pokeball } from '../../../../assets/patterns';
import api from '../../../../services/api';

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

interface PokemonEvolvesProps {
  name: string;
  level: number;
}

interface PokemonAAA {
  name: string;
  image: string;
  number: string;
  level: number;
}

interface EvolvesProps {
  species: {
    name: string;
  };
  evolution_details: [{ min_level: number }];
  evolves_to: EvolvesProps[];
}

const Evolution: React.FC<EvolutionProps> = ({ image, name }) => {
  const [pokemonsFamily, setPokemonsFamily] = useState<PokemonEvolvesProps[]>(
    [],
  );

  // Criando uma função recursiva para navegar na árvore de evolução do pokémon
  // A cada chamada é extraído o nome da espécie e concatenado com a lista dos nomes.
  const handleNameSpecies = useCallback(
    ({
      species,
      evolves_to,
      evolution_details,
    }: EvolvesProps): PokemonEvolvesProps[] => {
      let namesPokemons: PokemonEvolvesProps[] = [
        {
          name: species.name,
          level: 0,
        },
      ];
      if (evolution_details.length)
        namesPokemons[0].level = evolution_details[0].min_level;

      // A propriedade evolves_to retornada pela api é um vetor, desta maneira, pode-se que um
      // pokémon tenha duas caminhos/folhas na evolução.
      // if (evolution_details.length) console.log(evolution_details[0].min_level);
      evolves_to.forEach((evolves: EvolvesProps) => {
        namesPokemons = namesPokemons.concat(handleNameSpecies(evolves));
      });

      return namesPokemons;
    },
    [],
  );

  useEffect(() => {
    // Na rota /pokemon-species é retornado os atributos da espécie do Pokémon
    api.get(`/pokemon-species/${name}`).then(responseSpecies => {
      // E na propriedade evolution_chain é dado a url para a cadeia evolutiva do Pokémon
      // É extraído uma parte da url pelo motivo que o axios já possui o caminho raiz da api
      const url = responseSpecies.data.evolution_chain.url.split('v2')[1];
      api.get(url).then(responseEvolution => {
        const species = handleNameSpecies(responseEvolution.data.chain);
        setPokemonsFamily(species);
      });
    });
  }, [name, handleNameSpecies]);

  useEffect(() => {
    if (pokemonsFamily.length) {
      const urlsAxios = pokemonsFamily.map(p => api.get(`/pokemon/${p.name}`));

      Promise.all([...urlsAxios]).then(responses => {
        const result: any[] = [];

        for (let k = 0; k < responses.length; k += 1) {
          const { id, sprites } = responses[k].data;
          if (k === 0) {
            const next = {
              number: `#${'000'.substr(id.toString().length)}${id}`,
              image: sprites.other['official-artwork'].front_default,
            };
            result.push({ prev: next, level: 0, next });
          } else {
            const prev = result[k - 1].next;
            const next = {
              number: `#${'000'.substr(id.toString().length)}${id}`,
              image: sprites.other['official-artwork'].front_default,
            };
            result.push({ prev, level: 0, next });
          }
        }
        console.log(result);
      });
    }
  }, [pokemonsFamily]);

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
