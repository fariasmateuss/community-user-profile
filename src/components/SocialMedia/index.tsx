import React from 'react';

import { NavigationItemProps } from './types';

import socialMedia from '../../data/socialMedia';

import './styles.css';

function SocialMedia() {
  return (
    <nav className="icons-container">
      {socialMedia.map(({ icon, url }: NavigationItemProps, index) => (
        <a key={String(index)} href={url} target="blank" className="icon">
          {icon}
        </a>
      ))}
    </nav>
  );
}

export default SocialMedia;
