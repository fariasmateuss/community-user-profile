import styled from 'styled-components';

export const IconsContainer = styled.nav`
  padding: 1rem 0;

  @media screen and (max-width: 370px) {
    padding: 0.5rem 0;
  }
`;

export const Icon = styled.a`
  color: ${({ theme }) => theme.colors.silver};
  font-size: 1.5rem;
  text-decoration: none;
  margin-right: 8px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors[`dodger-blue`]};
  }

  @media screen and (max-width: 370px) {
    font-size: 1.1rem;
  }
`;
