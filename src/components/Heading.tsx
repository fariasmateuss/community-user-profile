import { PropsWithChildren } from 'react';

import * as S from '@styles/components/Heading';

type HeadingProps = {
  title: string;
};

export function Heading({ title, children }: PropsWithChildren<HeadingProps>) {
  return (
    <S.HeadingContainer>
      <S.Title>{title}</S.Title>

      {children}
    </S.HeadingContainer>
  );
}
