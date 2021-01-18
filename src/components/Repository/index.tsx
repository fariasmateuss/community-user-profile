import React from 'react';

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

import { RepositoryProps } from './types';

import './styles.css';

function Repository({ repositories }: RepositoryProps) {
  const {
    full_name,
    description,
    forks_count,
    stargazers_count,
    html_url,
  } = repositories;

  return (
    <div className="box">
      <div className="top-side">
        <header className="header-box">
          <RiBookMarkLine className="icon-box" />
          <a className="anchor-box" target="blank" href={html_url}>
            {full_name}
          </a>
        </header>
        <p className="description-box">{description}</p>
      </div>
      <div>
        <ul className="bottom-side">
          <li className="icon-wrap">
            <RiStarLine className="icon-box" />
            <span className="stars">{stargazers_count}</span>
          </li>
          <li className="icon-wrap">
            <AiOutlineFork className="icon-box" />
            <span className="forks">{forks_count}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Repository;
