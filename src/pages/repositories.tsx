import Head from 'next/head';

import { Header } from '@components/Header';
import { getLanguageColor } from '@utils/getLanguageColor';
import { api } from '@services/api';

import {
  Wrapper,
  Repository,
  TopSide,
  BookMarkLine,
  StarLine,
  OutlineFork,
  BottomSide,
  LanguageBadge,
} from '../styles/pages/Repositories';

type Repository = {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

type RepositoriesProps = {
  repositories: Repository[];
};

export default function Repositories({ repositories }: RepositoriesProps) {
  return (
    <main>
      <Head>
        <title>Work. Hobby. Open Source.</title>
      </Head>

      <Header title="Open source projects" returnToProfile />

      <Wrapper>
        {repositories.map(repository => (
          <Repository
            key={repository.id}
            borderColor={getLanguageColor(repository.language)}
          >
            <TopSide>
              <header>
                <BookMarkLine />
                <p>{repository.full_name}</p>
              </header>

              <p>{repository.description}</p>
            </TopSide>
            <BottomSide>
              <ul>
                <li>
                  <LanguageBadge
                    backgroundColor={getLanguageColor(repository.language)}
                  />
                  <p>{repository.language}</p>
                </li>
                <li>
                  <StarLine />
                  <p>{repository.stargazers_count}</p>
                </li>
                <li>
                  <OutlineFork />
                  <p>{repository.forks_count}</p>
                </li>
              </ul>
            </BottomSide>
          </Repository>
        ))}
      </Wrapper>
    </main>
  );
}

export const getStaticProps = async () => {
  const { data } = await api.get(`/user/repos`);

  return {
    props: {
      repositories: data,
    },

    revalidate: 60 * 60 * 24,
  };
};
