import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface BoxProps {
  color: string;
}

export const Container = styled(Link)<BoxProps>`
  display: flex;
  position: relative;

  width: inherit;
  height: 180px;
  background: ${({ color }) => color};
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);

  /* transform: scale(0.98); */
  transition: all ease 0.5s;
  border-radius: 6px;

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
    /* transform: scale(1); */
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
  overflow-x: hidden;
  overflow-y: hidden;

  > svg {
    position: absolute;
    right: 5px;
    top: -20px;
    z-index: 5;
    height: 200px;
    width: 200px;

    /* filter: opacity(8%); */

    path {
      fill: rgba(255, 255, 255, 0.1);
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 5px;
  }
`;

export const PokemonNumber = styled.span`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.number};
`;

export const PokemonName = styled.span`
  font-weight: bold;
  font-size: 40px;
  line-height: 45px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.white};
`;

export const PokemonType = styled.div<BoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px;

  background: ${({ color }) => color};
  border-radius: 3px;

  & + div {
    margin-left: 10px;
  }

  svg {
    width: 18px;
    height: 18px;

    path {
      fill: #fff;
    }
  }

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 14px;
    color: #ffffff;
    margin-left: 8px;
    text-transform: capitalize;
  }
`;
