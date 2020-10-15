import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

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

export const GoBack = styled(Link)`
  position: fixed;
  top: 6vw;
  left: 1vw;
  z-index: 10;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.white};

  &:hover {
    cursor: pointer;
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
      rgba(255, 255, 255, 0.09) 60%
    );
    -webkit-background-clip: text;
    -webkit-text-stroke: 4px transparent;
  }

  ${media.lessThan('huge')`
    h1 {
      font-size: 120px;
    }
  `};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: 14vh;

  > img {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 6%;
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

  ${media.lessThan('huge')`
    margin-top: 12vh;

    > img {
      height: 180px;
      width: 180px;
    }

    > div {
      padding-top: 20px;
    }
  `};
`;

// export const PokemonCircle = styled.span<ElementColorProps>`
//   z-index: 1;
//   /* position: absolute;
//   top: 0;
//   left: 0; */
//   height: 350px;
//   width: 350px;

//   border: double 10px transparent;
//   border-radius: 50%;
//   background-image: ${props =>
//     `linear-gradient(${props.color}, ${props.color}), linear-gradient(160deg, ${props.color} 30%, rgba(255, 255, 255, 0.6) 100%)`};
//   background-origin: border-box;
//   background-clip: content-box, border-box;
//   animation: animate 3s ease infinite;
//   /* transform: rotate(180deg); */

//   @keyframes animate {
//     0% {
//       transform: rotate(240deg);
//     }
//     100% {
//       transform: rotate(600deg);
//     }
//   }
// `;

interface PokemonLoaderProps {
  colorType: string;
  colorBackground: string;
}

export const PokemonLoader = styled.div<PokemonLoaderProps>`
  position: relative;
  z-index: 1;

  height: 350px;
  width: 350px;
  border-radius: 50px;

  ${media.lessThan('huge')`
    height: 180px;
    width: 180px;
    border-radius: 80px;
  `};

  animation: animate 3s ease infinite;

  @keyframes animate {
    0% {
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(600deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: ${props => `linear-gradient(
      to top,
      transparent,
      ${props.colorType}
    )`};
    background-size: 175px 315px;
    background-repeat: no-repeat;
    border-top-left-radius: 175px;
    border-bottom-left-radius: 175px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 50%;
    transform: translateX(-50%);
    width: 9px;
    height: 9px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    z-index: 30;
    box-shadow: 0px 0px 40px 6px #fff;
  }

  span {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: ${props => props.colorBackground};
    border-radius: 50%;
  }
`;

export const PokemonNumber = styled.span`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 2px;
  line-height: 32px;
  color: rgba(23, 23, 27, 0.6);

  ${media.lessThan('huge')`
    font-size: 22px;
    line-height: 24px;
  `};
`;

export const PokemonName = styled.span`
  font-weight: bold;
  font-size: 60px;
  line-height: 65px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.white};

  ${media.lessThan('huge')`
    font-size: 35px;
    line-height: 40px;
  `};
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

  ${media.lessThan('huge')`
    svg {
      width: 14px;
      height: 14px;
    }

    span {
      font-size: 16px;
      line-height: 20px;
    }
  `};
`;

export const SectionsName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto 0 10px;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: white;
  height: 320px;
  padding: 0 40px;
  border-radius: 45px 45px 0 0;

  ${media.lessThan('huge')`
    padding: 0 20px;
  `};
`;

export const SectionsNameButton = styled.button<{ active: boolean }>`
  position: relative;

  border: 0;
  outline: 0;
  width: 170px;
  background: none;

  font-size: 35px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.text.white};
  opacity: ${props => (props.active ? 1 : 0.4)};

  text-transform: capitalize;

  svg {
    position: absolute;
    top: -34px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
    width: 170px;
    height: auto;
    path {
      fill: rgba(255, 255, 255, 0.08);
    }
  }
`;
