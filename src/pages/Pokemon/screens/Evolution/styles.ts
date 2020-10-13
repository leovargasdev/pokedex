import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  }

  svg {
    position: absolute;
    right: 0;
    top: 0;
    height: inherit;
    width: initial;

    path {
      fill: rgba(0, 0, 0, 0.06);
    }
  }
`;
