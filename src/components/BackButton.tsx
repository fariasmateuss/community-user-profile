import Link from 'next/link';

import * as S from '@styles/components/BackButton';

type BackButtonProps = {
  href: string;
};

export function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href} passHref>
      <S.IconContainer>
        <S.IconArrowLeft />
      </S.IconContainer>
    </Link>
  );
}
