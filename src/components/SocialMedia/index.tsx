import React from 'react';

import { socialMedia } from '../../model/data';
import { NavigationItemProps } from './types';

import { NavigationIcons } from './styles';

export function SocialMedia() {
  return (
    <NavigationIcons>
      {socialMedia.map(({ icon, url }: NavigationItemProps, index) => (
        <a
          key={String(index)}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ))}
    </NavigationIcons>
  );
}
