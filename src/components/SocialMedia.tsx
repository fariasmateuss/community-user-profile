import React from 'react';

import { socialMedia } from '@model/accounts';
import { NavigationIcons } from '@styles/components/SocialMedia';

export type NavigationItemProps = {
  icon: JSX.Element;
  url: string;
};

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
