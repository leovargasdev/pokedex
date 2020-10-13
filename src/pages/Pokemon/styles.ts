import styled from 'styled-components';

interface ElementColorProps {
  color: string;
}

export const Container = styled.div<ElementColorProps>`
  display: flex;
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
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;

  h1 {
    font-weight: bold;
    font-size: 12vw;
    text-align: center;
    text-transform: uppercase;

    background: -webkit-linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.08) 60%
    );
    -webkit-background-clip: text;
    -webkit-text-stroke: 4px transparent;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 9vw 0;
`;

export const Header = styled.header`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;

  > img {
    z-index: 3;
    height: 350px;
    width: 350px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 40px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 3px;
    }
  }
`;

export const PokemonCircle = styled.span<ElementColorProps>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 350px;
  width: 350px;

  border: double 10px transparent;
  border-radius: 175px;
  background-image: ${props =>
    `linear-gradient(${props.color}, ${props.color}), linear-gradient(160deg, ${props.color} 30%, rgba(255, 255, 255, 0.2) 100%)`};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const PokemonNumber = styled.span`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 2px;
  line-height: 32px;
  color: rgba(23, 23, 27, 0.6);
`;

export const PokemonName = styled.span`
  font-weight: bold;
  font-size: 60px;
  line-height: 65px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.white};
`;

export const PokemonType = styled.div<ElementColorProps>`
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
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    margin-left: 8px;
    text-transform: capitalize;
  }
`;

export const SectionsName = styled.div<{ active: number }>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 80px;

  /* button {

  }

  button:nth-child(${props => props.active}) {
    opacity: 1;
  } */
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  border-radius: 65px 65px 0 0;
  margin-top: 10px;
  padding: 40px;
`;

export const SectionsNameButton = styled.button<{ active: boolean }>`
  background: none;
  border: 0;
  outline: 0;

  font-size: 35px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.text.white};
  opacity: ${props => (props.active ? 1 : 0.4)};

  text-transform: capitalize;
`;
