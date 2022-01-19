import Link from 'next/link';

import { Wrapper, ArrowLeftIcon } from '@styles/components/BackButton';

type BackButtonProps = {
  href: string;
};

export function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href} passHref>
      <Wrapper>
        <ArrowLeftIcon />
      </Wrapper>
    </Link>
  );
}
