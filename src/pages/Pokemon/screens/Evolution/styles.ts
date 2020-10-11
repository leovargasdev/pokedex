import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    margin-bottom: 10px;
  }
`;

export const EvolutionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 0 200px;
  margin: 10px 0;

  > svg {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const EvolutionPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.text.black};
  }

  h4 {
    font-size: 23px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.text.gray};
  }
`;

export const EvolutionPokemonImage = styled.div`
  position: relative;
  display: flex;

  width: 180px;
  height: 180px;
  margin-bottom: 5px;

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
