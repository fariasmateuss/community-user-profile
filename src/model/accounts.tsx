import React from 'react';
import { RiTwitchFill } from 'react-icons/ri';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillTwitterSquare,
  AiFillInstagram,
} from 'react-icons/ai';

import { NavigationItemProps } from '../components/SocialMedia';
import { USERNAME_KEY } from '../constants/params';

type NavigationItems = NavigationItemProps[];

export const socialMedia: NavigationItems = [
  {
    icon: <AiFillGithub />,
    url: `https://github.com/${USERNAME_KEY}`,
  },
  {
    icon: <AiFillInstagram />,
    url: `https://instagram.com/${USERNAME_KEY}`,
  },
  {
    icon: <AiFillLinkedin />,
    url: `https://www.linkedin.com/in/${USERNAME_KEY}`,
  },
  {
    icon: <AiFillMediumSquare />,
    url: `https://medium.com/@${USERNAME_KEY}`,
  },
  {
    icon: <AiFillTwitterSquare />,
    url: `https://twitter.com/${USERNAME_KEY}`,
  },
  {
    icon: <RiTwitchFill />,
    url: `https://www.twitch.tv/${USERNAME_KEY}`,
  },
  {
    icon: <AiFillYoutube />,
    url: `https://www.youtube.com/channel/UC2dD4ZlE8zuMoVGOP3jdB8g`,
  },
];
