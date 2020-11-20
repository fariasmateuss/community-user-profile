import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCamera } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

interface IProfile {
  name?: string;
  login?: string;
  avatar?: string;
}

const Header: React.FC<IProfile> = ({ name, login, avatar }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="hamburger-menu">
            <div className="center" />
          </div>
          <a href="a" className="mail">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
          </a>
          <div className="main">
            <div className="image">
              <img className="avatar" src={avatar} alt={name} />
              <div className="hover">
                <FontAwesomeIcon icon={faCamera} size="lg" />
              </div>
            </div>
            <h3 className="name">{name}</h3>
            <h3 className="sub-name">
              <span className="at-sign">@</span>
              {login}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
