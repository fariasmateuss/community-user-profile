import React from 'react';

import { ArticleProps } from './types';
import {
  Thumbnail,
  PostOwner,
  Headline,
  PostReactions,
  OutlineComment,
  OutlineHeart,
} from './styles';

export function Article({ articles }: ArticleProps) {
  const {
    user,
    title,
    social_image,
    canonical_url,
    readable_publish_date,
    public_reactions_count,
    comments_count,
  } = articles;

  return (
    <div>
      <a href={canonical_url} target="_blank" rel="noopener noreferrer">
        <Thumbnail src={social_image} alt={title} />

        <PostOwner>
          <img src={user.profile_image_90} alt={user.name} />

          <div>
            <strong>{user.name}</strong>
            <strong>{readable_publish_date}</strong>
          </div>
        </PostOwner>

        <Headline>{title}</Headline>

        <PostReactions>
          <ul>
            <li>
              <OutlineHeart />
              {public_reactions_count} reactions
            </li>
            <li>
              <OutlineComment />
              {comments_count} comments
            </li>
          </ul>
        </PostReactions>
      </a>
    </div>
  );
}
