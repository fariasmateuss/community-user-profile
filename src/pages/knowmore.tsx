import { InferGetStaticPropsType } from 'next';
import { format } from 'date-fns';

import Head from 'next/head';

import { Heading } from '@components/Heading';
import { Footer } from '@components/Footer';
import { Posts } from '@components/Posts';
import { BackButton } from '@components/BackButton';
import { Repositories } from '@components/Repositories';

import { Post } from '@shared/types';
import { api } from '@services/api';
import { getPinnableRepositories } from '@graphql/queries/getPinnableRepositories';

import * as S from '@styles/pages/KnowMore';

export default function KnowMore({
  pinnableRepositories,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Work. Hobby. Open Source.</title>
      </Head>

      <S.Wrapper>
        <Heading title="Featured Projects">
          <BackButton href="/" />
        </Heading>
        <Repositories repositories={pinnableRepositories} />

        <Heading title="Latest From the Blog" />
        <Posts posts={posts} />

        <Footer />
      </S.Wrapper>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const { data } = await api.get(`articles/me`);
    const posts = data.map((post: Post) => {
      return {
        ...post,
        published_at: format(new Date(post.published_at), `MMMM dd, yyyy`),
      };
    });

    const { pinnableItems } = await getPinnableRepositories();
    const pinnableRepositories = pinnableItems.nodes.map(node => node);

    return {
      props: {
        posts,
        pinnableRepositories,
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
