import Head from 'next/head';

import { Header } from '../components/Header';
import { RepositoryBadges } from '../components/RepositoryBadges';
import { USERNAME_KEY } from '../constants/params';
import { api } from '../services/api';

import {
  Wrapper,
  LinkToRepository,
  TopSide,
  BookMarkLine,
  StarLine,
  OutlineFork,
  BottomSide,
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

      <Header title="Open source projects" emoji="👨‍🚀" returnToProfile />

      <Wrapper>
        {repositories.map(repository => (
          <article key={repository.id}>
            <LinkToRepository
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
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
                    <RepositoryBadges language={repository.language} />
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
            </LinkToRepository>
          </article>
        ))}
      </Wrapper>
    </main>
  );
}

export const getStaticProps = async () => {
  const { data } = await api.get(`/users/${USERNAME_KEY}/repos`);

  return {
    props: {
      repositories: data,
    },

    revalidate: 60 * 60 * 24,
  };
};
