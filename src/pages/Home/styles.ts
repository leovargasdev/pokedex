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
    padding: 10px;
    gap: 50px;
  `};
`;
