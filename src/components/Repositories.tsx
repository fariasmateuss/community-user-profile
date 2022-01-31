import { Repository } from '@graphql/schemas';

import * as S from '@styles/components/Repositories';

type RepositoriesProps = {
  repositories: Repository[] | undefined;
};

export function Repositories({ repositories }: RepositoriesProps) {
  return (
    <S.Wrapper>
      {(repositories ?? []).map(repository => (
        <S.RepositoryContainer
          key={repository.id}
          borderColor={repository.primaryLanguage.color}
        >
          <div>
            <S.TopSide>
              <S.RepositoryIcon />
              <S.RepositoryLink
                href={repository.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repository.name}
              </S.RepositoryLink>
            </S.TopSide>

            <S.Description>{repository.description}</S.Description>
          </div>
          <div>
            <S.BottomSide>
              <S.ItemGroup>
                <S.Circle backgroundColor={repository.primaryLanguage.color} />
                <S.ItemTitle>{repository.primaryLanguage.name}</S.ItemTitle>
              </S.ItemGroup>

              <S.ItemGroup>
                <S.StargazerIcon />
                <S.ItemTitle>{repository.stargazerCount}</S.ItemTitle>
              </S.ItemGroup>

              <S.ItemGroup>
                <S.ForkIcon />
                <S.ItemTitle>{repository.forkCount}</S.ItemTitle>
              </S.ItemGroup>
            </S.BottomSide>
          </div>
        </S.RepositoryContainer>
      ))}
    </S.Wrapper>
  );
}
