import Head from 'next/head';

import { Header } from '@components/Header';
import { getRepositories } from '@graphql/queries/getRepositories';
import { Repositories } from '@graphql/schemas';

import * as S from '@styles/pages/Knowmore';

export default function KnowMore({ pinnableItems }: Repositories) {
  return (
    <main>
      <Head>
        <title>Work. Hobby. Open Source.</title>
      </Head>

      <Header title="Open source projects" backToHomePage />

      <S.Wrapper>
        {pinnableItems.nodes.map(pinnableItems => (
          <S.Container
            key={pinnableItems.id}
            borderColor={pinnableItems.primaryLanguage.color}
          >
            <div>
              <S.TopSide>
                <S.Repo />
                <S.Name
                  href={pinnableItems.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pinnableItems.name}
                </S.Name>
              </S.TopSide>

              <S.Description>{pinnableItems.description}</S.Description>
            </div>
            <div>
              <S.ItemGroup>
                <S.Item>
                  <S.Circle
                    backgroundColor={pinnableItems.primaryLanguage.color}
                  />
                  <S.Label>{pinnableItems.primaryLanguage.name}</S.Label>
                </S.Item>
                <S.Item>
                  <S.Stargazer />
                  <S.Label>{pinnableItems.stargazerCount}</S.Label>
                </S.Item>
                <S.Item>
                  <S.Fork />
                  <S.Label>{pinnableItems.forkCount}</S.Label>
                </S.Item>
              </S.ItemGroup>
            </div>
          </S.Container>
        ))}
      </S.Wrapper>
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
