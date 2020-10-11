import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 10px 100px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 12px;
  }

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
