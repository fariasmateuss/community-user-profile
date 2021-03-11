import React from 'react';

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

import { RepositoryProps } from './types';

import './styles.css';

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
    <div className="box">
      <a href={html_url} target="blank">
        <div className="top-side">
          <header className="header-box">
            <RiBookMarkLine />
            <p className="anchor-box">{full_name}</p>
          </header>
          <p className="description-box">{description}</p>
        </div>
        <div>
          <ul className="bottom-side">
            <li className="icon-wrap">
              <div className={`language ${languageClass}`} />
              <span className="icon-inner">{language}</span>
            </li>
            <li className="icon-wrap">
              <RiStarLine />
              <span className="icon-inner">{stargazers_count}</span>
            </li>
            <li className="icon-wrap">
              <AiOutlineFork />
              <span className="icon-inner">{forks_count}</span>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
}
