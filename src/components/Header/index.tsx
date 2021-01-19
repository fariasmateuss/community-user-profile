import React from 'react';

import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { HeaderProps } from './types';

import './styles.css';

function Header({ returnToProfile, title, emoji }: HeaderProps) {
  return (
    <header className="wrapper-header">
      <h1 className="topic">
        {title}{' '}
        <span className="emoji" role="img" aria-label="Astronaut">
          {emoji}
        </span>
      </h1>

      {returnToProfile && (
        <Link className="anchor-return" to="/">
          <FiChevronLeft size={16} />
          Return
        </Link>
      )}
    </header>
  );
}

export default Header;
