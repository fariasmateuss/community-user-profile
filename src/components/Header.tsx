import { ReactNode } from 'react';

import { BackButton } from './BackButton';

import * as S from '@styles/components/Header';

type HeaderProps = {
  backToHomePage?: boolean;
  title: string;
  children?: ReactNode;
};

export function Header({ backToHomePage, title, children }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{title}</S.Title>

        {backToHomePage && <BackButton href="/" />}
      </S.Container>

      {children}
    </S.Wrapper>
  );
}
