import React from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { SiDevDotTo } from 'react-icons/si';

import { NavigationItems } from '../components/SocialMedia/types';

const socialMedias: NavigationItems = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/fariasmateuss/',
  },
  {
    icon: <AiFillLinkedin />,
    url: 'https://www.linkedin.com/in/fariasmateuss/',
  },
  {
    icon: <AiFillMediumSquare />,
    url: 'https://medium.com/@fariasmateuss',
  },
  {
    icon: <AiFillTwitterSquare />,
    url: 'https://twitter.com/fariasmateuss',
  },
  {
    icon: <SiDevDotTo />,
    url: 'https://dev.to/fariasmateuss',
  },
  {
    icon: <AiFillYoutube />,
    url: 'https://www.youtube.com/channel/UC2dD4ZlE8zuMoVGOP3jdB8g',
  },
];

export default socialMedias;
