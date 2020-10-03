import styled from 'styled-components';

interface BoxProps {
  color: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 80px;
`;

export const Box = styled.div<BoxProps>`
  display: flex;
  position: relative;

  width: inherit;
  height: 180px;
  background: ${({ color }) => color};
  box-shadow: 1px 3px 20px 0 rgba(0, 0, 0, 0.4);

  transform: scale(0.9);
  transition: transform ease 0.5s;

  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1);
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
    right: 0px;
    top: -15px;
    z-index: 5;
    height: 210px;
    width: 210px;

    path {
      fill: rgba(255, 255, 255, 0.2);
    }
  }

  span {
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

  /* img {
    z-index: 10;
    position: absolute;
    right: 0px;
    top: -15px;
  } */
`;
