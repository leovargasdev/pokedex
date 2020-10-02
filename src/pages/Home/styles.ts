import styled from 'styled-components';

interface BoxProps {
  color: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 100px;
`;

export const Box = styled.div<BoxProps>`
  position: relative;
  width: inherit;
  height: 180px;
  background: ${({ color }) => color};
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: hidden;

  svg {
    position: absolute;
    right: 0px;
    top: -15px;

    height: 210px;
    width: 210px;

    path {
      fill: rgba(255, 255, 255, 0.3);
    }
  }
`;
