import React from 'react';

import { SocialMedia } from '../../components/SocialMedia';
import { useUsers } from '../../hooks/useUsers';

import {
  Wrapper,
  CardCover,
  CardStrip,
  HamburgerMenu,
  Mail,
  OutlineMail,
  Main,
  CardBody,
  AboutColumn,
  Buttons,
  FirstToggle,
  SecondToggle,
  AsideColumn,
} from './styles';

export function Profile() {
  const user = useUsers();

  return (
    <main>
      {user && (
        <Wrapper>
          <CardCover>
            <CardStrip>
              <HamburgerMenu>
                <div />
              </HamburgerMenu>
              <Mail href="mailto:mateus_vinicius15@outlook.com">
                <OutlineMail size={28} />
              </Mail>
              <Main>
                <div>
                  <img src={user.avatar_url} alt={user.name} />
                </div>
                <h2>{user.name}</h2>
                <h3>{user.location}</h3>
              </Main>
            </CardStrip>

            <CardBody>
              <div>
                <AboutColumn>
                  <h3>About</h3>
                  <p>{user.bio}</p>
                </AboutColumn>

                <SocialMedia />

                <Buttons>
                  <div>
                    <FirstToggle to="/blog">Blog</FirstToggle>
                  </div>
                  <div>
                    <SecondToggle to="/repositories">Projects</SecondToggle>
                  </div>
                </Buttons>
              </div>

              <AsideColumn>
                <div>
                  <h2>{user.public_repos}</h2>
                  <h3>Repositories</h3>
                </div>
                <div>
                  <h2>{user.following}</h2>
                  <h3>Following</h3>
                </div>
                <div>
                  <h2>{user.followers}</h2>
                  <h3>Followers</h3>
                </div>
              </AsideColumn>
            </CardBody>
          </CardCover>
        </Wrapper>
      )}
    </main>
  );
}
