import React from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { SiDevDotTo } from 'react-icons/si';

import { USERNAME_KEY } from '../constants/params';

import { NavigationItems } from '../components/SocialMedia/types';

const socialMedia: NavigationItems = [
  {
    icon: <AiFillGithub />,
    url: `https://github.com/${USERNAME_KEY}`,
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
    icon: <SiDevDotTo />,
    url: `https://dev.to/${USERNAME_KEY}`,
  },
  {
    icon: <AiFillYoutube />,
    url: `https://www.youtube.com/channel/UC2dD4ZlE8zuMoVGOP3jdB8g`,
  },
];

export default socialMedia;
