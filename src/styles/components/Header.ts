import styled from 'styled-components';
import { darken } from 'polished';
import { BsArrowLeft } from 'react-icons/bs';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;

  h1 {
    position: relative;
    max-width: 450px;
    font-size: 3rem;
    line-height: 3.5rem;
    color: var(--topic);
    margin: 5rem 0 5rem;
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
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 420px) {
      width: 260px;
      font-size: 2.6rem;
    }

    span {
      -webkit-text-fill-color: currentColor;
    }
  }
`;

export const LinkToProfile = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors['spun-pearl']};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => darken(0.2, theme.colors['spun-pearl'])};
  }
`;

export const ArrowLeft = styled(BsArrowLeft)`
  width: 30px;
  height: auto;
  transition: transform 0.2s ease 0s;

  &:hover {
    transform: translateX(-5px);
  }
`;
