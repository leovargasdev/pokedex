import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface BoxProps {
  color: string;
}

export const Container = styled(Link)<BoxProps>`
  position: relative;

  display: flex;
  height: 180px;
  width: inherit;

  border-radius: 6px;
  background: ${props => props.color};
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);

  transition: all ease 0.5s;

  > img {
    position: absolute;
    right: 0px;
    top: -50px;
    z-index: 10;
    height: 210px;
    width: 210px;

    filter: grayscale(100%);
    -webkit-transition: -webkit-filter 400ms ease;
    transition: all ease 0.4s;
  }

  &:hover {
    cursor: pointer;
    border-radius: 15px;

    > img {
      filter: grayscale(0);
      top: -45px;
    }
  }
`;

export const Pokemon = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  position: relative;
  padding-left: 30px;

  > svg {
    position: absolute;
    right: 5px;
    top: 0;
    height: 180px;
    width: 180px;

    path {
      fill: rgba(255, 255, 255, 0.2);
    }
  }
  /* Seção dos types do pokémon */
  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 5px;
  }
`;

export const PokemonNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  /* O número 99 aplica uma opacidade de 60% no hex da cor */
  color: ${({ theme }) => theme.colors.text.number}99;
`;

export const PokemonName = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 45px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.white};
`;

export const PokemonType = styled.div<BoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px;

  background: ${props => props.color};
  border-radius: 3px;

  & + div {
    margin-left: 10px;
  }

  svg {
    width: 18px;
    height: 18px;

    path {
      fill: ${({ theme }) => theme.colors.text.white};
    }
  }

  span {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.text.white};
    font-size: 18px;
    font-weight: 500;
    line-height: 14px;
    text-transform: capitalize;
  }
`;
