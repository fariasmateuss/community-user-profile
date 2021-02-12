import React from 'react';

import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';

import SocialMedia from '../../components/SocialMedia';

import useUsersData from '../../hooks/users.hooks';

import './styles.css';

function Profile() {
  const user = useUsersData();

  return (
    <main>
      {user && (
        <div className="wrapper-profile">
          <div className="card">
            <div className="division">
              <div className="hamburger-menu">
                <div className="center" />
              </div>
              <a href="mailto:mateus_vinicius15@outlook.com" className="mail">
                <HiOutlineMail size={30} />
              </a>
              <div className="main">
                <div className="image">
                  <img
                    className="avatar"
                    src={user.avatar_url}
                    alt={user.name}
                  />
                </div>
                <h3 className="name">{user.name}</h3>
                <h3 className="sub-location">
                  <span className="icon-location" />
                  {user.location}
                </h3>
              </div>
            </div>

            <div className="content">
              <div className="left">
                <div className="about-container">
                  <h3 className="title">About</h3>
                  <p className="text">{user.bio}</p>
                </div>

                <SocialMedia />

                <div className="buttons-wrap">
                  <div className="first-wrap">
                    <a
                      href="mailto:mateus_vinicius15@outlook.com"
                      target="blank"
                      className="first"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="second-wrap">
                    <Link to="/repositories" className="second">
                      Projects
                    </Link>
                  </div>
                </div>
              </div>

              <div className="right">
                <div>
                  <h3 className="number">{user.public_repos}</h3>
                  <h3 className="number-title">Repositories</h3>
                </div>
                <div>
                  <h3 className="number">{user.following}</h3>
                  <h3 className="number-title">Following</h3>
                </div>
                <div>
                  <h3 className="number">{user.followers}</h3>
                  <h3 className="number-title">Followers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Profile;
