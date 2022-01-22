import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

type RepositoryProps = {
  borderColor?: string;
};

type currentIconColorProps = {
  backgroundColor: string;
};

export const Wrapper = styled.section`
  display: grid;
  gap: 20px;
  margin: 0 20px 20px;
`;

export const Container = styled.article<RepositoryProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
  transition: all 0.4s ease;

  &:hover {
    border: 1px solid ${({ borderColor }) => borderColor};
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

export const TopSide = styled.header`
  display: flex;
  align-items: center;
`;

export const Name = styled.a`
  margin-left: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  cursor: pointer;
`;

export const Description = styled.p`
  margin: 0.5rem 0 1rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors[`shuttle-gray`]};
  letter-spacing: 0.1px;
`;

const IconCSS = css`
  fill: ${({ theme }) => theme.colors[`pale-sky`]};
  flex-shrink: 0;
`;

export const Repo = styled(RiBookMarkLine)`
  ${IconCSS}
`;

export const Stargazer = styled(RiStarLine)`
  ${IconCSS}
`;

export const Fork = styled(AiOutlineFork)`
  ${IconCSS}
`;

export const ItemGroup = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const Label = styled.p`
  margin-left: 0.3rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors[`shuttle-gray`]};
`;

export const Circle = styled.span<currentIconColorProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
