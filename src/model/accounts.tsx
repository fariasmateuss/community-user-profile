import React from 'react';
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { SiDevDotTo } from 'react-icons/si';
import { RiTwitchFill } from 'react-icons/ri';

import { NavigationItemProps } from '@components/SocialMedia';
import { links } from '@constants/links';

type NavigationItems = NavigationItemProps[];

export const socialMedia: NavigationItems = [
  {
    icon: <AiFillGithub />,
    url: links.github,
  },
  {
    icon: <AiFillTwitterSquare />,
    url: links.twitter,
  },
  {
    icon: <AiFillMediumSquare />,
    url: links.medium,
  },
  {
    icon: <AiFillLinkedin />,
    url: links.linkedin,
  },
  {
    icon: <RiTwitchFill />,
    url: links.twitch,
  },
  {
    icon: <SiDevDotTo />,
    url: links.devTo,
  },
  {
    icon: <AiFillYoutube />,
    url: links.youtube,
  },
];
