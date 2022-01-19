import styled from 'styled-components';
import { gradient } from '@styles/theme/animations';

export const Wrapper = styled.header`
  margin: 5rem 0 5rem;
  padding: 0 1.25rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  position: relative;
  max-width: 550px;
  font-size: 3rem;
  line-height: 3.5rem;
  color: var(--topic);

  background: linear-gradient(
    270.97deg,
    #ffe580 -21.36%,
    #ff7571 -2.45%,
    #ea5dad 26.84%,
    #c2a0fd 64.15%,
    #3bf0e4 108.29%,
    #b2f4b6 159.03%
  );
  background-clip: text;
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 10s ease infinite;
  @media screen and (max-width: 420px) {
    width: 260px;
    font-size: 2.6rem;
  }
`;
