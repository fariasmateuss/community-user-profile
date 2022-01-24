import Image from 'next/image';
import format from 'date-fns/format';

import * as S from '@styles/components/Footer';

export function Footer() {
  const currentDate = format(new Date(), `yyyy`);

  return (
    <S.FooterContainer>
      <Image
        src="/favicon.png"
        alt="Mateus V. Farias's Logo"
        objectFit="contain"
        width={50}
        height={50}
      />
      <S.Title>Just for fun!</S.Title>

      <S.Copyright>Mateus V. Farias © {currentDate}</S.Copyright>
    </S.FooterContainer>
  );
}
