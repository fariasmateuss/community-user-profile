import Link from 'next/link';

import {
  ArrowLeft,
  HeaderWrapper,
  LinkToProfile,
} from '../styles/components/Header';

type HeaderProps = {
  returnToProfile: boolean;
  title: string;
};

export function Header({ returnToProfile, title }: HeaderProps) {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>

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
