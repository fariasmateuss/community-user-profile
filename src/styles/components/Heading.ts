import styled from 'styled-components';

import { animations } from '@styles/theme/animations';
import { gradients } from '@styles/theme/gradients';

export const HeadingContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 1.25rem 5rem;
`;

export const Title = styled.h1`
  position: relative;
  max-width: 550px;
  font-size: 3rem;
  line-height: 3.5rem;

  background: ${gradients.yellowToGreen};
  background-clip: text;
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${animations.easeInfinite} 10s ease infinite;

  @media screen and (max-width: 420px) {
    width: 260px;
    font-size: 2.6rem;
  }
`;
