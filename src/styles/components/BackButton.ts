import styled from 'styled-components';
import { darken } from 'polished';
import { BsArrowLeft } from 'react-icons/bs';

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    transform: translateX(-5px);
  }
`;

export const ArrowLeftIcon = styled(BsArrowLeft)`
  width: 30px;
  height: auto;
  color: ${({ theme }) => theme.colors[`spun-pearl`]};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => darken(0.2, theme.colors[`spun-pearl`])};
  }
`;
