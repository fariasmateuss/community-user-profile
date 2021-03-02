import React from 'react';

import { ArticleProps } from './types';

import './styles.css';

export function Article({ articles }: ArticleProps) {
  const {
    title,
    social_image,
    canonical_url,
    readable_publish_date,
    user,
  } = articles;

  return (
    <div>
      <a href={canonical_url} target="blank">
        <img src={social_image} alt={title} className="thumbnail" />

        <div className="representation">
          <img src={user.profile_image_90} alt={user.name} />

          <div>
            <strong>{user.name}</strong>
            <strong>{readable_publish_date}</strong>
          </div>
        </div>

        <h1 className="headline">{title}</h1>
      </a>
    </div>
  );
}
