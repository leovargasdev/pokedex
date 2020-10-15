import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const SectionEvolution = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

export const EvolutionPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.text.gray};
  }

  h4 {
    text-transform: capitalize;
    font-size: 23px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.text.black};
  }
`;

export const EvolutionPokemonImage = styled(Link)`
  position: relative;
  display: flex;

  width: 180px;
  height: 180px;
  margin-bottom: 10px;

  img {
    margin: auto;
    width: 140px;
    height: 140px;
    z-index: 2;
    transition: transform 0.4s ease;
  }

  svg {
    position: absolute;
    right: 0;
    top: 0;
    height: inherit;
    width: initial;
    transition: transform 0.8s ease;

    path {
      fill: rgba(0, 0, 0, 0.06);
    }
  }

  ${media.lessThan('huge')`
    width: 140px;
    height: 140px;

    img {
      width: 100px;
      height: 100px;
    }
  `};

  &:hover {
    img {
      transform: scale(1.15);
    }
    svg {
      transform: rotate(180deg);
    }
  }
`;
