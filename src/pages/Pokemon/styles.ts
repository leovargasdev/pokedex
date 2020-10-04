import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

interface HeaderPokemonCircleProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  position: relative;

  width: 100%;
  height: 100vh;
  background: ${props => props.color};

  h1 {
    color: ${props => props.color};
  }
`;

export const BackgroundNamePokemon = styled.div`
  position: absolute;
  width: 100vw;
  left: 0;
  right: 0;
  top: 0;

  h1 {
    font-weight: bold;
    font-size: 12vw;
    text-align: center;
    text-transform: uppercase;

    background: -webkit-linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.06) 70%
    );
    -webkit-background-clip: text;
    -webkit-text-stroke: 4px transparent;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9vw 0;
  z-index: 2;
`;

export const HeaderPokemon = styled.div`
  position: relative;

  img {
    height: 350px;
    width: 350px;
  }
`;

export const HeaderPokemonCircle = styled.div<HeaderPokemonCircleProps>`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 350px;
  width: 350px;

  border: double 10px transparent;
  border-radius: 175px;
  background-image: ${props =>
    `linear-gradient(${props.color}, ${props.color}), linear-gradient(150deg, ${props.color} 30%, rgba(255, 255, 255, 0.4) 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
