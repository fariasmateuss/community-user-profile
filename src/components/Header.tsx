import { ReactNode } from 'react';

import { BackButton } from './BackButton';

import { Wrapper, Container, Title } from '@styles/components/Header';

type HeaderProps = {
  backToHomePage?: boolean;
  title: string;
  children?: ReactNode;
};

export function Header({ backToHomePage, title, children }: HeaderProps) {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>

        {backToHomePage && <BackButton href="/" />}
      </Container>

      {children}
    </Wrapper>
  );
}
