import React from 'react';

import { HeaderProps } from './types';
import { ChevronLeft, HeaderWrapper, LinkToProfile } from './styles';

export function Header({ returnToProfile, title, emoji }: HeaderProps) {
  return (
    <HeaderWrapper>
      <h1>
        {title}{' '}
        <span role="img" aria-label="Emoji">
          {emoji}
        </span>
      </h1>

      {returnToProfile && (
        <LinkToProfile to="/">
          <ChevronLeft />
          Return
        </LinkToProfile>
      )}
    </HeaderWrapper>
  );
}
