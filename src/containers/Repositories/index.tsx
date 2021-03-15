import React from 'react';

import { Repository } from '../../components/Repository';
import { Header } from '../../components/Header';
import { useRepositories } from '../../hooks/useRepositories';

import { ContainersWrapper } from '../../styles/components';

export function Repositories() {
  const repositories = useRepositories();

  return (
    <main>
      <Header title="Open source projects" emoji="👨‍🚀" returnToProfile />

      <ContainersWrapper>
        {repositories.map(repository => (
          <article key={repository.id}>
            <Repository repositories={repository} />
          </article>
        ))}
      </ContainersWrapper>
    </main>
  );
}
