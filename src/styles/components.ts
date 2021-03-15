import styled from 'styled-components';

export const ContainersWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  margin: 0px 20px 20px;

  article {
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 6px;
    transition: all 0.4s ease;

    &:hover {
      border: 1px solid ${props => props.theme.colors['dodger-blue']};
      transform: translate3D(0, -1px, 0) scale(1.02);
    }
  }
`;
