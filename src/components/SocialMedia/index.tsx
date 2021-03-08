import React from 'react';

import { socialMedia } from '../../model/data';
import { NavigationItemProps } from './types';

import './styles.css';

export function SocialMedia() {
  return (
    <nav className="icons-container">
      {socialMedia.map(({ icon, url }: NavigationItemProps, index) => (
        <a
          key={String(index)}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}
