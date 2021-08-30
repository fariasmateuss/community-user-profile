import Link from 'next/link';

import {
  ArrowLeft,
  HeaderWrapper,
  LinkToProfile,
} from '../styles/components/Header';

type HeaderProps = {
  returnToProfile: boolean;
  title: string;
  emoji: string;
};

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
        <Link href="/">
          <LinkToProfile>
            <ArrowLeft />
          </LinkToProfile>
        </Link>
      )}
    </HeaderWrapper>
  );
}
