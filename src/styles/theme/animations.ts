import { keyframes } from 'styled-components';

export const animations = {
  easeInfinite: keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  to {
    background-position: 0 50%;
  }
`,
};
