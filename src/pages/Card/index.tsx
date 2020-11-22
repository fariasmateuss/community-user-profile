import React, { useState, useEffect } from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillTwitterSquare,
} from 'react-icons/ai';

import { RiTwitchFill } from 'react-icons/ri';

import api from '../../services/api';

import './styles.css';

interface IProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
}

const Card: React.FC<IProfile> = () => {
  const [profile, setProfile] = useState<IProfile | null>();

  useEffect(() => {
    async function fetchProfileData(): Promise<void> {
      const response = await api.get<IProfile>('/users/fariasmateuss');
      const information = response.data;

      setProfile(information);
    }

    fetchProfileData();
  }, []);

  return (
    <main>
      <div className="container">
        <div className="card">
          <div className="header">
            <div className="hamburger-menu">
              <div className="center" />
            </div>
            <a href="https://github.com/fariasmateuss/" className="mail">
              <AiFillGithub size={34} />
            </a>
            <div className="main">
              <div className="image">
                <img
                  className="avatar"
                  src={profile?.avatar_url}
                  alt={profile?.name}
                />
              </div>
              <h3 className="name">{profile?.name}</h3>
              <h3 className="sub-location">{profile?.location}</h3>
            </div>
          </div>

          <div className="content">
            <div className="left">
              <div className="about-container">
                <h3 className="title">About</h3>
                <p className="text">{profile?.bio}</p>
              </div>
              <div className="icons-container">
                <a
                  href="https://www.linkedin.com/in/fariasmateuss/"
                  target="blank"
                  className="icon"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://medium.com/@fariasmateuss"
                  target="blank"
                  className="icon"
                >
                  <AiFillMediumSquare />
                </a>
                <a
                  href="https://medium.com/@fariasmateuss"
                  target="blank"
                  className="icon"
                >
                  <AiFillTwitterSquare />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2dD4ZlE8zuMoVGOP3jdB8g?sub_confirmation=1"
                  target="blank"
                  className="icon"
                >
                  <AiFillYoutube />
                </a>
                <a
                  href="https://www.twitch.tv/fariasmateuss"
                  target="blank"
                  className="icon"
                >
                  <RiTwitchFill />
                </a>
              </div>
              <div className="buttons-wrap">
                <div className="follow-wrap">
                  <a
                    href="mailto:mateus_vinicius15@outlook.com"
                    target="blank"
                    className="follow"
                  >
                    Email
                  </a>
                </div>
                <div className="projects-wrap">
                  <a
                    href="https://github.com/fariasmateuss?tab=repositories"
                    target="blank"
                    className="projects"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>

            <div className="right">
              <div>
                <h3 className="number">{profile?.public_repos}</h3>
                <h3 className="number-title">Repositories</h3>
              </div>
              <div>
                <h3 className="number">{profile?.following}</h3>
                <h3 className="number-title">Following</h3>
              </div>
              <div>
                <h3 className="number">{profile?.followers}</h3>
                <h3 className="number-title">Followers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
