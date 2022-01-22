import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { SocialMedia } from '@components/SocialMedia';
import { shareURL } from '@utils/shareURL';
import { getUser } from '@graphql/queries/getUser';
import { User } from '@graphql/schemas';

import * as S from '../styles/pages/Home';

export default function Home({ user }: User) {
  return (
    <main>
      <Head>
        <title>Me on the Web.</title>
      </Head>

      <S.Wrapper>
        <ToastContainer position="top-right" autoClose={3000} />

        <S.Card>
          <S.Header>
            <S.HamburgerMenu>
              <S.Center />
            </S.HamburgerMenu>
            <S.Mail href={`mailto:${user.email}`}>
              <S.OutlineMail />
            </S.Mail>
            <S.Main>
              <S.Circle>
                <Image src={user.avatarUrl} layout="fill" alt={user.name} />
              </S.Circle>
              <S.Name>{user.name}</S.Name>
              <S.SubName>{user.location}</S.SubName>
            </S.Main>
          </S.Header>

          <S.Content>
            <div>
              <div>
                <h3 className="about-title">About</h3>
                <p className="about-description">{user.bio}</p>
              </div>

              <SocialMedia />

              <S.ButtonsWrap>
                <button
                  type="button"
                  className="button button__primary"
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

                <button type="button" className="button button__secondary">
                  <Link href="/knowmore">Know More</Link>
                </button>
              </S.ButtonsWrap>
            </div>

            <S.Right>
              <div>
                <h2 className="number">{user.repositories.totalCount}</h2>
                <h3 className="number-title">Repositories</h3>
              </div>
              <div>
                <h2 className="number">{user.following.totalCount}</h2>
                <h3 className="number-title">Following</h3>
              </div>
              <div>
                <h2 className="number">{user.followers.totalCount}</h2>
                <h3 className="number-title">Followers</h3>
              </div>
            </S.Right>
          </S.Content>
        </S.Card>
      </S.Wrapper>
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
