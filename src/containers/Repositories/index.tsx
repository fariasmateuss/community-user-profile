import React from 'react';

import Repository from '../../components/Repository';
import Header from '../../components/Header';

import useRepositoriesData from '../../hooks/repositories.hooks';

import './styles.css';

function Repositories() {
  const repositories = useRepositoriesData();

  return (
    <main>
      <Header title="Open source projects" emoji="👨‍🚀" returnToProfile />

      <article className="wrapper-repositories">
        {repositories.map(repository => (
          <section key={repository.id} className="repository">
            <Repository repositories={repository} />
          </section>
        ))}
      </article>
    </main>
  );
}

export default Repositories;
