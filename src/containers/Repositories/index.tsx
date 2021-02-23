import React from 'react';

import Repository from '../../components/Repository';
import Header from '../../components/Header';

import useRepositories from '../../hooks/useRepositories';

import './styles.css';

function Repositories() {
  const repositories = useRepositories();

  return (
    <main>
      <Header title="Open source projects" emoji="👨‍🚀" returnToProfile />

      <section className="wrapper-repositories">
        {repositories.map(repository => (
          <article key={repository.id} className="repository">
            <Repository repositories={repository} />
          </article>
        ))}
      </section>
    </main>
  );
}

export default Repositories;
