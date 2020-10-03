import styled from 'styled-components';
import media from 'styled-media-query';

interface BoxProps {
  color: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 80px;

  ${media.lessThan('huge')`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
  `};
`;

export const Box = styled.div<BoxProps>`
  display: flex;
  position: relative;

  width: inherit;
  height: 180px;
  background: ${({ color }) => color};
  box-shadow: 1px 3px 20px 0 rgba(0, 0, 0, 0.35);

  transform: scale(0.98);
  transition: all ease 0.5s;

  border-radius: 6px;

  &:hover {
    cursor: pointer;
    transform: scale(1);
    border-radius: 15px;
  }

  > img {
    position: absolute;
    right: 0px;
    top: -50px;
    z-index: 10;
    height: 210px;
    width: 210px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

export const PokemonInfo = styled.div`
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

    path {
      fill: rgba(255, 255, 255, 0.2);
    }
  }

  > span {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text.number};
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 45px;
    color: ${({ theme }) => theme.colors.text.white};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 5px;
  }
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
  }
`;
