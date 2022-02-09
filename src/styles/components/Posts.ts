import { gradients } from '@styles/theme/gradients';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 0 1.25rem 1.25rem;

  @media (max-width: 524px) {
    grid-template-columns: 1fr;
  }
`;

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};

  border-radius: 6px;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .thumbnail {
    border-radius: 4px 4px 2px 2px;
  }
`;

export const PostWrap = styled.div`
  margin: 0 1.25rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.7;
`;

export const PostPreview = styled.strong`
  color: ${props => props.theme.colors[`shuttle-gray`]};

  .read-full-article {
    background: ${gradients.purpleToRed};
    background-clip: border-box;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .read-time {
    position: relative;
    margin-left: 0.5rem;
    padding-left: 0.5rem;

    ::before {
      content: '';
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background: ${({ theme }) => theme.colors[`spun-pearl`]};
      position: absolute;
      left: 0;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
`;

export const PostContent = styled.div`
  margin: 0.85rem 1.25rem;
  color: ${({ theme }) => theme.colors[`text-article`]};
`;

export const PostTitle = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.2px;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.link};
  }

  @media screen and (max-width: 370px) {
    font-size: 1.2rem;
  }
`;

export const PostDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors[`shuttle-gray`]};
  margin-top: 0.5rem;

  @media screen and (max-width: 370px) {
    font-size: 0.9rem;
  }
`;
