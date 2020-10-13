import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;

  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  height: 100%;
  padding: 20px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.text.black};
    width: 150px;
    text-align: center;
  }

  > span {
    font-size: 22px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.text.gray};
    width: 100px;
    text-align: center;
  }
`;

interface BarStatusProps {
  percentage: number;
  color: string;
}

export const BarStatus = styled.div<BarStatusProps>`
  flex: 1;
  width: 100%;
  height: 4px;
  border-radius: 2px;

  span {
    display: block;
    width: ${props => props.percentage}%;
    height: inherit;
    background: ${props => props.color};
  }
`;
