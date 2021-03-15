import styled, { css } from 'styled-components';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px 6px 0 0;
`;

export const PostOwner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.9rem;

  img {
    margin: 0 0.7rem 0 1.3rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  strong {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme.colors['text-article']};

    &:last-child {
      font-weight: 300;
      line-height: 1.7;
    }
  }
`;

export const Headline = styled.h1`
  font-size: 1.3rem;
  margin: 0.9rem 1.3rem 0.9rem 1.3rem;
  color: ${props => props.theme.colors['text-article']};
`;

export const PostReactions = styled.div`
  margin: 0.9rem 1.3rem 0.9rem 1.3rem;

  ul {
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      font-size: 0.85rem;
      color: ${props => props.theme.colors['text-article']};
    }
  }
`;

const iconCSS = css`
  margin-right: 0.3rem;
  font-size: 1rem;
`;

export const OutlineHeart = styled(AiOutlineHeart)`
  ${iconCSS}
`;

export const OutlineComment = styled(AiOutlineComment)`
  ${iconCSS}
`;
