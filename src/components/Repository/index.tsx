import React from 'react';

import { RepositoryProps } from './types';
import {
  LinkToRepository,
  TopSide,
  BookMarkLine,
  StarLine,
  OutlineFork,
  BottomSide,
} from './styles';

export function Repository({ repositories }: RepositoryProps) {
  const {
    full_name,
    description,
    forks_count,
    stargazers_count,
    html_url,
    language,
  } = repositories;

  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <LinkToRepository href={html_url} target="_blank" rel="noopener noreferrer">
      <TopSide>
        <header>
          <BookMarkLine />
          <p>{full_name}</p>
        </header>

        <p>{description}</p>
      </TopSide>
      <BottomSide>
        <ul>
          <li>
            <span className={`language ${languageClass}`} />
            <p>{language}</p>
          </li>
          <li>
            <StarLine />
            <p>{stargazers_count}</p>
          </li>
          <li>
            <OutlineFork />
            <p>{forks_count}</p>
          </li>
        </ul>
      </BottomSide>
    </LinkToRepository>
  );
}
