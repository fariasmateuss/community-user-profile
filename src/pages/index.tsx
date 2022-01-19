import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { SocialMedia } from '@components/SocialMedia';
import { shareURL } from '@utils/shareURL';
import { getUser } from '@graphql/queries/getUser';
import { User } from '@graphql/schemas';

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

export default function Home({ user }: User) {
  return (
    <main>
      <Head>
        <title>Me on the Web.</title>
      </Head>

      <Wrapper>
        <ToastContainer position="top-right" autoClose={3000} />

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
                <Image src={user.avatarUrl} layout="fill" alt={user.name} />
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
                  onClick={() =>
                    shareURL({
                      text: `Find me on the web`,
                      title: `Hello. I'm Mateus V. Farias.`,
                      url: user.websiteUrl,
                    })
                  }
                >
                  Share
                </button>

                <button type="button">
                  <Link href="/knowmore">Know More</Link>
                </button>
              </Buttons>
            </div>

            <AsideColumn>
              <div>
                <h2>{user.repositories.totalCount}</h2>
                <h3>Repositories</h3>
              </div>
              <div>
                <h2>{user.following.totalCount}</h2>
                <h3>Following</h3>
              </div>
              <div>
                <h2>{user.followers.totalCount}</h2>
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
  try {
    const user = await getUser();

    return {
      props: {
        user,
      },

      revalidate: 60 * 60 * 24,
    };
  } catch (error) {
    console.log(error);

    return {
      props: {},
    };
  }
};
