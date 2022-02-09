import { socialMedia } from '@model/accounts';

import * as S from '@styles/components/SocialMedia';

export type NavigationItemProps = {
  icon: JSX.Element;
  url: string;
};

export function SocialMedia() {
  return (
    <S.IconsContainer>
      {socialMedia.map(({ icon, url }: NavigationItemProps, index) => (
        <S.Icon
          key={String(index)}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </S.Icon>
      ))}
    </S.IconsContainer>
  );
}
