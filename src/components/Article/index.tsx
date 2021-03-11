import React from 'react';

import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';

import { ArticleProps } from './types';

import './styles.css';

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
        <img src={social_image} alt={title} className="cover" />

        <div className="representation">
          <img src={user.profile_image_90} alt={user.name} />

          <div>
            <strong>{user.name}</strong>
            <strong>{readable_publish_date}</strong>
          </div>
        </div>

        <h1 className="headline">{title}</h1>

        <div className="reactions-wrap">
          <ul className="reactions-box">
            <li className="reactions-inner">
              <AiOutlineHeart className="reaction-icon" />{' '}
              {public_reactions_count} reactions
            </li>
            <li className="reactions-inner">
              <AiOutlineComment className="reaction-icon" /> {comments_count}{' '}
              comments
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
}
