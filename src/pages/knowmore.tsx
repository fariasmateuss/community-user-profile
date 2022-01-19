import Head from 'next/head';

import { Header } from '@components/Header';
import { getRepositories } from '@graphql/queries/getRepositories';
import { Repositories } from '@graphql/schemas';

import {
  Wrapper,
  Content,
  TopSide,
  BookMarkLine,
  StarLine,
  OutlineFork,
  BottomSide,
  LanguageBadge,
} from '../styles/pages/Repositories';

export default function KnowMore({ pinnableItems }: Repositories) {
  return (
    <main>
      <Head>
        <title>Work. Hobby. Open Source.</title>
      </Head>

      <Header title="Open source projects" returnToProfile />

      <Wrapper>
        {pinnableItems.nodes.map(pinnableItems => (
          <Content
            key={pinnableItems.id}
            borderColor={pinnableItems.primaryLanguage.color}
          >
            <TopSide>
              <header>
                <BookMarkLine />
                <a
                  href={pinnableItems.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pinnableItems.name}
                </a>
              </header>

              <p>{pinnableItems.description}</p>
            </TopSide>
            <BottomSide>
              <ul>
                <li>
                  <LanguageBadge
                    backgroundColor={pinnableItems.primaryLanguage.color}
                  />
                  <p>{pinnableItems.primaryLanguage.name}</p>
                </li>
                <li>
                  <StarLine />
                  <p>{pinnableItems.stargazerCount}</p>
                </li>
                <li>
                  <OutlineFork />
                  <p>{pinnableItems.forkCount}</p>
                </li>
              </ul>
            </BottomSide>
          </Content>
        ))}
      </Wrapper>
    </main>
  );
}

export const getStaticProps = async () => {
  try {
    const { pinnableItems } = await getRepositories();

    return {
      props: {
        pinnableItems,
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
