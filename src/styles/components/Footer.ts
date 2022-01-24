import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  padding: 2rem 2rem;

  color: ${({ theme }) => theme.colors[`light-gray`]};
  font-size: 0.9rem;

  @media screen and (max-width: 370px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.p`
  margin-left: 2rem;
  padding: 0.25rem 0 0.25rem 2rem;
  border-left: 1px solid ${({ theme }) => theme.colors.silver};
`;

export const Copyright = styled.span`
  margin-left: auto;
  text-transform: capitalize;
`;
