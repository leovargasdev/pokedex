import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 80px;

  h1 {
    font-weight: bold;
    font-size: 50px;
    line-height: 56px;

    color: ${({ theme }) => theme.colors.text.black};
  }

  > svg {
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: -1;
    height: 100vh;
    width: auto;

    path {
      fill: rgba(0, 0, 0, 0.03);
    }
  }

  ${media.lessThan('large')`
    padding: 10px;
  `};
`;

export const Pokemons = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;

  ${media.lessThan('huge')`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 50px;
  `};
`;
