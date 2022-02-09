import { InferGetStaticPropsType } from 'next';
import { ToastContainer } from 'react-toastify';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { SocialMedia } from '@components/SocialMedia';
import { getUser } from '@graphql/queries/getUser';

import { shareURL } from '@utils/shareURL';
import { shortenLongNumbers } from '@utils/shortenLongNumbers';

import * as S from '@/styles/pages/Home';

export default function Home({
  user,
  followers,
  following,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Me on the Web.</title>
      </Head>

      <ToastContainer position="top-right" autoClose={3000} />

      {user && (
        <S.Wrapper>
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
                  <Image
                    src={user.avatarUrl}
                    alt={user.name}
                    width={102}
                    height={102}
                    quality={100}
                    className="next-image"
                  />
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
                  <Link passHref href="/knowmore">
                    <button type="button" className="button button__secondary">
                      Know More
                    </button>
                  </Link>
                </S.ButtonsWrap>
              </div>

              <S.Right>
                <div>
                  <h2 className="number">{user.repositories.totalCount}</h2>
                  <h3 className="number-title">Repositories</h3>
                </div>
                <div>
                  <h2 className="number">{following}</h2>
                  <h3 className="number-title">Following</h3>
                </div>
                <div>
                  <h2 className="number">{followers}</h2>
                  <h3 className="number-title">Followers</h3>
                </div>
              </S.Right>
            </S.Content>
          </S.Card>
        </S.Wrapper>
      )}
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const user = await getUser();

    const followers = shortenLongNumbers(user.followers.totalCount);
    const following = shortenLongNumbers(user.following.totalCount);

    return {
      props: {
        user,
        followers,
        following,
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
