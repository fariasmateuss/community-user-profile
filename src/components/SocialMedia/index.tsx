import React from 'react';

import { NavigationItemProps } from './types';

import networks from '../../data/networks';

import './styles.css';

function SocialMedia() {
  return (
    <nav className="icons-container">
      {networks.map(({ icon, url }: NavigationItemProps, index) => (
        <a key={String(index)} href={url} target="blank" className="icon">
          {icon}
        </a>
      ))}
    </nav>
  );
}

export default SocialMedia;
