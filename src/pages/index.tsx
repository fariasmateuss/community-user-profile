import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { SocialMedia } from '../components/SocialMedia';
import { shareURL } from '../utils/shareURL';
import { api } from '../services/api';

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
  AsideColumn,
} from '../styles/pages/Home';

type User = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  email: string;
  blog: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
};

type HomeProps = {
  user: User;
};

export default function Home({ user }: HomeProps) {
  return (
    <main>
      <Wrapper>
        <Head>
          <title>Me on the Web.</title>
        </Head>
        <CardCover>
          <CardStrip>
            <HamburgerMenu>
              <div />
            </HamburgerMenu>
            <Mail href={`mailto:${user.email}`}>
              <OutlineMail />
            </Mail>
            <Main>
              <div>
                <Image src={user.avatar_url} layout="fill" alt={user.name} />
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
                <button
                  type="button"
                  className="share"
                  onClick={() =>
                    shareURL({
                      text: `Find me on the web`,
                      title: `Hello. I'm Mateus V. Farias.`,
                      url: user.blog,
                    })
                  }
                >
                  Share
                </button>
                <button type="button">
                  <Link href="/repositories">Know More</Link>
                </button>
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
    </main>
  );
}

export const getStaticProps = async () => {
  const { data } = await api.get(`/user`);

  return {
    props: {
      user: data,
    },

    revalidate: 60 * 60 * 24,
  };
};
